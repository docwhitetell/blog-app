import dva from 'dva'
import {routerRedux} from 'dva/router'
import {request} from '../services/request'
import Cookies from 'js-cookie'
import config from '../utils/config'
import {message} from 'antd'
message.config({
    top:100
})
export default {

    namespace: 'login',

    state: {
        errorMsg:''
    },

    subscriptions: {
        setup ({ dispatch }) {
            dispatch({ type: 'checkLogin' })
        },
    },

    effects: {
        *checkLogin({payload},{put,call,select}){
            if(Cookies('access_token')){
                yield put(routerRedux.push('/admin/dashboard'))
            }
        },
        * login ({payload,}, { put, call, select }) {
            const res = yield call(request, {url: config.api.userLogin, data: payload, method: 'post'})
            console.log(res)
            if (!res.response) {
                if (res.data.error) {
                    console.log(res.data.error)
                    message.error(`${res.data.error},Please Check Your Account Again!`)
                    yield put({
                        type: 'updateError',
                        payload: res.data.error
                    })
                } else if (res.data.success) {
                    Cookies.set('access_token', res.data.token.access_token, {expires: 30, path: '/'});
                    Cookies.set('refresh_token', res.data.token.refresh_token, {expires: 30, path: '/'});
                    yield put(routerRedux.push('/admin/dashboard'))
                    yield put({
                        type: 'app/query'
                    })
                }
            } else {
                message.error('Server has no response!')
            }
        },
    },

    reducers: {
        'updateError'(state,payload){
            return {
                ...state,
                errorMsg:payload.payload
            }
        },

    },

};
