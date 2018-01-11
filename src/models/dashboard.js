import dva from 'dva'
import {routerRedux} from 'dva/router'
import {request} from '../services/request'
import config from '../utils/config'

export default {
    namespace: 'dashboard',
    state: {

        numberCard: [],
        tabs: 0,
        cardMenu:false,
        loading:true,
        search: [],
        pagination: {current:1,pageSize:5},
        sales:[{name:'Household appliances',percent:'28.79%',sales:4544,color:'#F44336'},
            {name:'Consumption of alcohol',percent:'21.04%',sales:3321,color:'#E91E63'},
            {name:'Personal health',percent:'19.73%',sales:3113,color:'#3F51B5'},
            {name:'Clothing bags',percent:'14.83%',sales:2341,color:'#2196F3'},
            {name:'Maternal and child products',percent:'7.80',sales:1231,color:'#009688'},
            {name:'Other',percent:'7.80%',sales:1231,color:'#FFEB3B'},
        ],
        data:[
            {
                name:'data.no1',
                value:1264,
            },
            {
                name:'data.no2',
                value:1864,
            },
            {
                name:'data.no3',
                value:1064,
            },
            {
                name:'data.no4',
                value:2264,
            },  {
                name:'data.no5',
                value:5264,
            },
            {
                name:'data.no6',
                value:2664,
            },
            {
                name:'data.no7',
                value:3864,
            },

        ]

    },

    subscriptions: {
        setupHistory ({ dispatch, history }) {
            history.listen((location) => {
                if (location.pathname === '/admin/dashboard') {
                    dispatch({type:'app/update',payload:{pageHeader:'Dashboard'}})
                }
            })
        },
    },

    effects: {
        *getData({payload},{put,call,select}){
            const res = yield call(request,{url:config.mockApi.dashboard,method:'get'})
            //console.log(res)
            res.data.loading=false
            if(res.status===200){
                yield put({
                    type:'update',
                    payload:res.data
                })
            }
        },
        *getTableData({payload},{put,call,select}){
            const query={page:payload.current,pageSize:payload.pageSize}
            const res = yield call(request,{url:config.mockApi.search,params:query,method:'get'})
            if(res.status===200){
                const data={search:res.data.data,pagination:{current:payload.current,pageSize:payload.pageSize,totle:res.data.total}}
                yield put({type:'update',payload:data})
            }
        }
    },

    reducers: {
        'update'(state,payload){
            return {
                ...state,
                ...payload.payload
            }
        }
    },

};
