const Mock = require('mockjs')

let usersListData = Mock.mock({
    'data|80-100': [
        {
            id: '@id',
            name: '@name',
            nickName: '@last',
            phone: /^1[34578]\d{9}$/,
            'age|11-99': 1,
            address: '@county(true)',
            isMale: '@boolean',
            email: '@email',
            createTime: '@datetime',
            avatar () {
                return Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', this.nickName.substr(0, 1))
            },
        },
    ],
})

let newsData=Mock.mock({
    'news|80-100':[{
        id: '@id',
        title:'@title(3, 5)',
        description:'@paragraph(1)',
        content:'@paragraph(4, 6)',
        createTime: '@datetime',
        link:'/news/@id',
        poster(){
            return Mock.Random.image('1000x500', Mock.Random.color(), '#757575', 'png',  Mock.Random.word())
        }
    }]

})
newsData=newsData.news.sort((a, b) => (a.createTime > b.createTime ? -1 : 1))

module.exports={
    [`GET /mock/news`](req,res){
        const {query}=req
        let {pageSize,page}=query
        pageSize=pageSize|| 10
        page=page || 1
        res.status(200).json({
            data:newsData.slice((page - 1) * pageSize, page * pageSize),
            total:newsData.length,
            current:page,
        })
    }
}