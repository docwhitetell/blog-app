import dva from 'dva'
import pathToRegexp from 'path-to-regexp'
import {routerRedux} from 'dva/router'
import Cookies from 'js-cookie'
import config from '../utils/config'
import {request} from "../services/request";
import { EditorState, convertToRaw, ContentState } from 'draft-js';

import htmlToDraft from 'html-to-draftjs';
export default {

    namespace: 'blogs',
    state:{
        msg:null,
        data:[],
        title:'Blogs',
        order: 'asc',
        orderBy: 'id',
        selected: [],
        page: 1,
        rowsPerPage: 10,
        total:0,
        last_page:null,

        open:[],
        current:{},
        editTitle:'',
        editClasses:'',
        editDescription:'',
        editPoster:'',
        editorState:EditorState.createEmpty(),

        userResource:[],
        resourcePagination: {current:1,pageSize:5},
        frontBlogsLists:[],
        frontBlogsData:{
            lastSevenDayPublish:0,
            classes:[],
        },
    },
    subscriptions: {
        setup ({ dispatch, history }) {
            history.listen((location) => {

                const match = pathToRegexp('/admin/blogs/edit/:id').exec(location.pathname)
                const match2 = pathToRegexp('/blogs/:id').exec(location.pathname)
                if (location.pathname === '/admin/blogs') {
                    dispatch({type:'app/update',payload:{pageHeader:'My Blogs'}})
                    dispatch({
                        type: 'getUserBlogs',
                    })
                }else if(location.pathname==='/admin/blogs/create'){
                    dispatch({type:'app/update',payload:{pageHeader:'New Blog'}})
                    dispatch({
                        type:'update',
                        payload:{current:null,editTitle:'',editClasses:'',editPoster:'',editDescription:'',editorState:EditorState.createEmpty()}
                    })
                    dispatch({
                        type:'queryUserResource'
                    })
                }else if(match){
                    dispatch({type:'app/update',payload:{pageHeader:'Blog Update'}})
                    dispatch({
                        type:'queryUserResource'
                    })
                    dispatch({ type: 'query', payload: { id: match[1] } })
                }else if(match2){
                    dispatch({ type: 'FrontBlogQuery', payload: { id: match2[1] } })
                }
            })
        },
    },

    effects: {
        *getUserBlogs({payload},{call,put,select}){
            const req=yield call(request,{url:config.api.blogs,withtoken:true})
            if(req.status===200){
                let open=[]
                for(var i=0;i<req.data.length;i++){
                    open[i]=false
                }
                yield put({
                    type:'update',
                    payload:{
                        data:req.data,
                        open:open,current:null,
                        editTitle:'',editClasses:'',editDescription:'',
                        editPoster:'',editorState:EditorState.createEmpty()
                    }
                })
            }
        },
        *query({payload},{call,put,select}){
            const req=yield call(request,{url:`${config.api.blogs}/${payload.id}`,withtoken:true})
            if(req.status===200){
                const html=req.data.content
                //console.log(html)
                const contentBlock = htmlToDraft(html);
                let editorState
                if (contentBlock) {
                    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                    editorState = EditorState.createWithContent(contentState);
                }
                editorState=editorState?editorState:EditorState.createEmpty()
                yield put({type:'update',payload:{current:req.data,editTitle:req.data.title,editClasses:req.data.classes,editDescription:req.data.description,editPoster:req.data.poster,editorState:editorState}})
            }
        },
        *FrontBlogQuery({payload},{call,put,select}){
            const req=yield call(request,{url:`${config.api.frontBlogs}/${payload.id}`})
            if(req.status===200){
                yield put({type:'update',payload:{current:req.data,}})
            }
        },
        *queryUserResource({payload},{call,put,select}){
            const req=yield call(request, {url:config.api.allFiles,withtoken:true})
            if(req.status===200){
                yield put({
                    type:'update',
                    payload:{userResource:req.data}
                })
            }
        },
        *create({payload},{call,put,select}){
            yield put(routerRedux.push('/admin/blogs/create'))
        },
        *createBlog({payload},{call,put,select}){
            const data={blog:payload}
            const req=yield call(request,{url:config.api.blogCreate,withtoken:true,data:data,method:'post'})
            yield put({
                type:'update'
            })
            yield put(routerRedux.push('/admin/blogs'))
        },
        *updateBlog({payload},{call,put,select}){
            const data={blog:payload}
            const req=yield call(request,{url:config.api.blogUpdate,withtoken:true,data:data,method:'post'})
        },
        *edit({payload},{call,put,select}){
            console.log(payload)
            yield put(routerRedux.push(`/admin/blogs/edit/${payload}`))
        },
        *deleteBlog({payload},{call,put,select}){
            const data={blog:payload}
            const req=yield call(request,{url:config.api.blogDelete,withtoken:true,data:data,method:'post'})
            if(req.data.status){
                yield put({type:'getUserBlogs'})
            }
        }
    },

    reducers: {
        'update'(state,payload){
            return{
                ...state,
                ...payload.payload
            }
        }
    },

};
