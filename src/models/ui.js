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

    namespace: 'ui',
    state:{},
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if(pathname==='/admin/UIElement/form'){
                    dispatch({type:'app/update',payload:{pageHeader:'Form Components'}})
                }else if(pathname==='/admin/UIElement/table'){
                    dispatch({type:'app/update',payload:{pageHeader:'Table Components'}})
                }else if(pathname==='/admin/UIElement/editor'){
                    dispatch({type:'app/update',payload:{pageHeader:'Editor Components'}})
                }
            });
        },
    },

    effects: {

    },

    reducers: {
        'update'(state,payload){
            return {
                ...state,
                ...payload.payload
            }
        },

    },

};
