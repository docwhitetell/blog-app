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
const headers={
    'Accept':'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization':'Bearer '+Cookies('access_token')
}
export default {

    namespace: 'front',
    state:{
        open:false,
        blogslist:[],
        blogs:{
            lastSevenDayPublish:0,
            classes:[],
            total:0,
        },
        video:[],
        dialog:[false,false]
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
            });
        },
    },

    effects: {
        *queryIndex({payload},{call,put,select}){
            yield put({type:'update',payload:{blogslist:[]}})
            const res=yield call(request,{url:config.api.frontIndex,params:{limit:4}})
            if(res.status===200){
                yield put({
                        type: 'update',
                        payload: {
                            blogslist: res.data.blogs.blogs,
                        }
                    })
            }
        },
        /*博客页 博客列表及博客统计数据 查询*/
        *queryBlogs({payload},{call,put,select}){
            yield put({type:'update',payload:{blogslist:[]}})
            const res=yield call(request,{url:config.api.frontBlogs,params:payload})
            if(res.status===200){
                yield put({
                    type: 'update',
                    payload: {
                        blogslist: res.data.blogs,
                        blogs:{
                            lastSevenDayPublish:res.data.record.lastSevenDayPublish,
                            classes:res.data.record.classes,
                            total:res.data.record.total
                        }
                    }
                })
            }
        },

    },

    reducers: {
        'update'(state,payload){
            return {
                ...state,
                ...payload.payload
            }
        },
        'dialogOpen'(state,payload){
            let newState=state.dialog
            newState.map((v,i)=>{
                v=false
            })
            newState[payload.payload]=true
            return{
                ...state,
                dialog:newState
            }
        },
        'dialogClose'(state,payload){
            let newState=state.dialog
            newState[payload.payload]=false
            return {
                ...state,
                dialog:newState
            }
        },

    },

};
