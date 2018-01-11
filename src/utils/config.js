import Cookies from 'js-cookie'
import store from 'store'
module.exports = {
    name: 'Material Design',
    CORS: [],
    openPages: ['/'],
    api: {
        /*
            //example
            domain:'http://你的laravel项目地址',
            //example
        */
        domain:'http://admin.docwhite.cn',
        userLogin:'http://admin.docwhite.cn/v1/login',
        refresh:'http://admin.docwhite.cn/v1/refresh',
        userInfo:'http://admin.docwhite.cn/v1/current-user',
        userList:'http://admin.docwhite.cn/v1/user',
        addUser:'http://admin.docwhite.cn/v1/register',
        deleteUser:'http://admin.docwhite.cn/v1/user/delete',
        blogs:'http://admin.docwhite.cn/v1/user/blogs',
        //blogsDetail:'http://admin.docwhite.cn/v1/user/blogs/{id}',
        blogCreate:'http://admin.docwhite.cn/v1/user/blogs/create',
        blogUpdate:'http://admin.docwhite.cn/v1/user/blogs/update',
        blogDelete:'http://admin.docwhite.cn/v1/user/blogs/delete',
        fileUpload:'http://admin.docwhite.cn/v1/file/upload',
        allFiles:'http://admin.docwhite.cn/v1/user/files/all',
        userImgs:'http://admin.docwhite.cn/v1/user/imgs',
        userVideos:'http://admin.docwhite.cn/v1/user/videos',
        deleteFiles:'http://admin.docwhite.cn/v1/user/files/delete',

        /*前台首页数据 api  */
        frontIndex:'http://admin.docwhite.cn/v2/index',
        /*前台博客文章列表 带有统计数据 api ，带 /id 则查询指定id文章  */
        frontBlogs:'http://admin.docwhite.cn/v2/blogs',


    },
    mockApi:{
        news:'http://localhost:8000/mock/news',
        dashboard:'http://localhost:8000/mock/dashboard',
        search:'http://localhost:8000/mock/search-word',
    },
    authenticHeaders:{
        'Accept':'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization':'Bearer '+Cookies('access_token')
    }
}
