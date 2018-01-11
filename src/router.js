import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect,routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import Layout from './routes/entry'
import PageHeader from './components/pageHeader/pageHeader'
const {ConnectedRouter}=routerRedux
function RouterConfig({ history ,app}) {

    const error = dynamic({
        app,
        component: () => import('./routes/error'),
    })


    const routes=[
        {
            path:'/',
            models:()=>[import('./models/front')],
            component:()=>import('./routes/front/paper')
        },
        {
            path:'/blogs',
            models:()=>[import('./models/front')],
            component:()=>import('./routes/front/pages/blogs/blogs')
        },
        {
            path:'/blogs/:id',
            models:()=>[import('./models/blogs')],
            component:()=>import('./routes/front/pages/blogs/detail')
        },
        {
            path:'/login',
            models:()=>[import('./models/login')],
            component:()=>import('./routes/login/login')
        },
        {
            path:'/admin/dashboard',
            models:()=>[import('./models/dashboard')],
            component:()=>import('./routes/dashboard/dashboard')
        },
        {
            path:'/admin/user',
            models:()=>[import('./models/users')],
            component:()=>import('./routes/user/user')
        },{
            path:'/admin/blogs',
            models:()=>[import('./models/blogs')],
            component:()=>import('./routes/blogs/lists')
        },
        {
            path:'/admin/blogs/create',
            models:()=>[import('./models/blogs')],
            component:()=>import('./routes/blogs/editor')
        },
        {
            path:'/admin/blogs/edit/:id',
            models:()=>[import('./models/blogs')],
            component:()=>import('./routes/blogs/editor')
        },
        {
            path:'/admin/UIElement/editor',
            models:()=>[import('./models/ui')],
            component:()=>import('./routes/UI/editor')
        },
        {
            path:'/admin/UIElement/table',
            models:()=>[import('./models/ui')],
            component:()=>import('./routes/UI/table')
        },
        {
            path:'/admin/UIElement/form',
            models:()=>[import('./models/ui')],
            component:()=>import('./routes/UI/form')
        },
        {
            path:'/admin/multi-upload',
            models:()=>[import('./models/files')],
            component:()=>import('./routes/upload/multi')
        },
        {
            path:'/admin/my-files',
            models:()=>[import('./models/files')],
            component:()=>import('./routes/upload/myFiles')
        },
        {
            path:'/admin/files-lists',
            models:()=>[import('./models/files')],
            component:()=>import('./routes/upload/lists')
        }
    ]
  return (
      <ConnectedRouter history={history}>
          <Layout>
              <Switch>
                  {
                      routes.map(({path,name, ...dynamics}, key) => (
                              <Route key={key}
                                     exact
                                     path={path}
                                     component={dynamic({
                                         app,
                                         ...dynamics,
                                     })}
                              />
                      ))
                  }
              </Switch>
          </Layout>
      </ConnectedRouter>
  );
}

RouterConfig.propTypes = {
    history: PropTypes.object,
    app: PropTypes.object,
}
export default RouterConfig;
