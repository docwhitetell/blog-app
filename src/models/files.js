import dva from 'dva'
import {routerRedux} from 'dva/router'
import Cookies from 'js-cookie'
import config from '../utils/config'
import {request} from '../services/request'
import store from 'store'
import {message} from 'antd'
message.config({
    top:100
})

export default {

    namespace: 'files',
    state:{
        filesList:[],
        videoList:[],
        open:store.get('open')?store.get('open'):[],
        alert:store.get('alert')?store.get('alert'):[],
        tabs:0,

        filesPagination: {current:1,pageSize:10,total:null},
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (pathname === '/admin/files-lists') {
                    dispatch({type:'app/update',payload:{pageHeader:'Files Lists'}})
                    dispatch({
                        type: 'query',
                        payload:{pageSize:10}
                    })
                }else if(pathname==='/admin/multi-upload'){
                    dispatch({type:'app/update',payload:{pageHeader:'Multi-files drag & auto upload'}})
                }else if(pathname==='/admin/my-files'){
                    dispatch({type:'app/update',payload:{pageHeader:'My Files'}})
                }
            });
        },
    },

    effects: {
        *query({payload},{call,put,select}){
            const data=payload || {pageSize:15}
            const res=yield call(request, {url:config.api.userImgs,withtoken:true,params:data})
            if(res.status===200 ){
                let open=[],alert=[]

                res.data.data.map((item,index)=>{
                  open[index]=false
                  alert[index]=false
                })
                store.set('open',open)
                store.set('alert',alert)
                yield put({
                    type:'update',
                    payload:{
                        filesList:res.data.data,
                        open:open,
                        alert:alert,
                        filesPagination:{current:res.data.current_page,pageSize:parseInt(res.data.per_page),total:res.data.total}
                    }
                })
            }
        },
        *queryVideos({payload},{call,put,select}){
            const res=yield call(request, {url:config.api.userVideos,withtoken:true})
            if(res.status===200){
                let open=[],alert=[]
                res.data.map((item,index)=>{
                    open[index]=false
                    alert[index]=false
                })
                store.set('open',open)
                store.set('alert',alert)
                yield put({
                    type:'update',
                    payload:{
                        filesList:res.data,
                        open:open,
                        alert:alert,
                        filesPagination:{current:res.data.current_page,pageSize:parseInt(res.data.per_page),total:res.data.total}
                    }
                })
            }
        },
        *delete({payload},{call,put,select}) {
            yield put({
                type:'alertClose'
            })
            const data={id:payload}
            const req=yield call(request, {url:config.api.deleteFiles,withtoken:true,params:data})
            if(req.data.success){
                console.log('delete success')
                yield put({
                    type:'query',
                })
            }else if(req.data.error){
                console.log(req.data.error)
                message.error(`${req.data.error}`)
            }
        }
    }
    ,

    reducers: {
        'update'(state,payload){
            return {
                ...state,
                ...payload.payload
            }
        },
        'dialogOpen'(state,payload){
            let newState=state.open
            newState.map((v,i)=>{
                v=false
            })
            newState[payload.payload]=true
            return{
                ...state,
                open:newState
            }
        },
        'dialogClose'(state,payload){
            let newState=state.open
            newState[payload.payload]=false
            return {
                ...state,
                open:newState
            }
        },
        'alertOpen'(state,payload){
            let newState=state.alert
            newState.map((v,i)=>{
                v=false
            })
            newState[payload.payload]=true
            //console.log(newState)
            return{
                ...state,
                alert:newState
            }
        },
        'alertClose'(state,payload){
            const newState=state.alert
            let alertArray=[]
            for(var i=0;i<newState.length;i++){
                alertArray[i]=false
            }
           // console.log(alertArray)
           // newState[payload.payload]=false
            return {
                ...state,
                alert:alertArray
            }
        },
    },

};
