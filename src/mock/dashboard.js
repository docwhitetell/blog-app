const qs = require('qs')
const Mock = require('mockjs')


let NumberCard=[
    {icon:'pay-circle-o',color:'#00E676',number:Mock.Random.integer(2000,5000),title:'Online Review'},
    {icon:'team',color:'#03A9F4',number:Mock.Random.integer(2000,5000),title:'New Customers'},
    {icon:'message',color:'#E91E63',number:Mock.Random.integer(2000,5000),title:'Active Projects'},
    {icon:'shopping-cart',color:'#7E57C2',number:Mock.Random.integer(2000,5000),title:'Referrals'},
]
let searchData = Mock.mock({
    'data|80-100': [
        {
            word: '@word',
            userNumber: '@integer(100,2000)',
            rose: '@integer(-10,20)',
        },
    ],
})


searchData.data.map((item,index)=>{item.id=index+1;index++})
let database=searchData.data
module.exports={
    [`GET /mock/dashboard`](req,res){
        res.status(200).json({
            numberCard:NumberCard,
            search:database.slice(0, 10),
            pagination:{current:1,pageSize:5,total:database.length}
        })
    },
    [`GET /mock/search-word`] (req, res) {
        const { query } = req
        let { pageSize, page} = query
        pageSize = pageSize || 5
        page = page || 1

        let newData = database

        res.status(200).json({
            data: newData.slice((page - 1) * pageSize, page * pageSize),
            total: newData.length,
        })
    },
}