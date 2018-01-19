/**
 * Created by yuhaoming on 2018/1/19.
 */
import dva from 'dva'
import {routerRedux} from 'dva/router'
import Cookies from 'js-cookie'
import config from '../../utils/config'
import {request} from '../../services/request'
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

  namespace: 'settings',
  state:{},
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if(pathname==='/admin/settings/index'||pathname==='/admin/settings/blogs') {
          dispatch({type: 'app/update', payload: {pageHeader: 'Setting'}})
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
