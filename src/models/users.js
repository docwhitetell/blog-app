import dva from 'dva'
import {routerRedux} from 'dva/router'
import queryString from 'query-string'
import Cookies from 'js-cookie'
import config from '../utils/config'
import {request} from '../services/request'
import {message} from 'antd'
message.config({
    top:100
})

export default {

    namespace: 'users',

    state: {
        dialogopen: false,
        dialogLoading:false,
        error:{
            name:null,
            email:null,
            password:null,
            password_confirmation:null,
        },
        title:'Users',
        order: 'asc',
        orderBy: 'id',
        selected: [],
        data:[],
        page: 1,
        rowsPerPage: 10,
        total:0,
        last_page:null,
    },

    subscriptions: {
        setup ({ dispatch, history }) {
            history.listen((location) => {
                if (location.pathname === '/admin/user') {
                    dispatch({type:'app/update', payload:{pageHeader:'Users'}})
                    const payload = location.query || { page: 1, rowsPerPage: 10 }
                    dispatch({
                        type: 'getUserList',
                        payload,
                    })
                }
            })
        },
    },

    effects: {
        *getUserList({payload},{put,call,select}){
            yield put({type:'loading'})
            const res=yield call(request, {url:config.api.userList,withtoken:true,params:payload})
                if(res.status===200){
                    const {current_page,data,total,last_page}=res.data
                    const newState={
                        data:data,total:total,page:current_page,last_page:last_page,
                    }
                    yield put({type:'update',payload:newState})
            }

        },
        *deleteUser({payload},{put,call,select}){
            /*获取全局state*/
            const { users } = yield (select(_ => _))

            const params={users:payload}
            /*发起删除异步请求*/
            const res=yield call(request, {url:config.api.deleteUser,withtoken:true,params:params})

            res.data.error?
                message.error(`${res.data.error}`):
                yield put({type:'getUserList',payload:{page:users.page,rowsPerPage:users.rowsPerPage}})

        },

        *changeRowsPerPage({payload},{put,call,select}){
            yield put({
                type:'update',
                payload
            })
            yield put({
                type:'getUserList',
                payload
            })
        }
    },

    reducers: {
        'update'(state,payload){
            const newState=payload.payload
            return{
                ...state,
                ...newState
            }
        },
        'loading'(state){
            return{
                ...state,
                loading:!state.loading
            }
        },
        'dialogLoading'(state){
            return{
                ...state,
                dialogLoading:!state.dialogLoading
            }
        },
        'showOrHideDialog'(state){
            return{
                ...state,
                dialogopen:!state.dialogopen,
                error:{
                    name:null,
                    email:null,
                    password:null,
                    password_confirmation:null,
                }
            }
        },
        'updateErrorMsg'(state,payload){
            return{
                ...state,
                error:payload.payload
            }
        }


    },

};
