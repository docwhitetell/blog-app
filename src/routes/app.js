import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import { withRouter } from 'dva/router'
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Hidden from 'material-ui/Hidden';
import { MuiThemeProvider } from 'material-ui/styles';
import store from 'store'
import Cookies from 'js-cookie'
import LeftMenu from '../layout/LeftMenu'
import Header from '../layout/Header'
import Footer from '../layout/Footer'

import FrontNav from './front/components/header'
import FrontFooter from './front/components/footer'
import CirLoading from '../components/loading/CirLoading'
import Loading from '../components/loading/FrontLoading'
import PageHeader from '../components/pageHeader/pageHeader'


import {routeMiddleware} from '../services/routeMiddleware'
/* Material JSS */
import styles from './styles'

class ResponsiveDrawer extends React.Component{
    constructor(props){
        super(props)
    }
    handleChangeTheme=(e)=>{
        const {app,dispatch}=this.props
        const value=e.target.value
        const currentColor=value
        store.set('currentColor',currentColor)
        switch (value){
            case "blue":
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.blue}})
                break;
            case 'pink':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.pink}})
                break;
            case 'indigo':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.indigo}})
                break;
            case 'red':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.red}})
                break;
            case 'purple':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.purple}})
                break;
            case 'cyan':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.cyan}})
                break;
            case 'teal':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.teal}})
                break;
            case 'green':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.green}})
                break;
            case 'yellow':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.yellow}})
                break;
            case 'amber':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.amber}})
                break;
            case 'orange':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.orange}})
                break;
            case 'grey':
                return dispatch({type:'app/update', payload:{currentColor:value,theme:app.colors.colors.grey}})
                break;
            default:
        }
    }

    handleClick=(target)=>{
        const {dispatch}=this.props
        dispatch({
            type:'app/dropdownShowHide',
            payload:target
        })
    }
    handleUserLogout=()=>{
        Cookies.remove('access_token')
        Cookies.remove('refresh_token')
        const {dispatch}=this.props
        dispatch({
            type:'app/logout'
        })
    }
    handleDrawerToggle = () => {
        const {dispatch}=this.props
        dispatch({
            type:'app/drawerShowHide',
        })
    }

    render(){
        const {app,children,classes,theme,loading,location,dispatch}=this.props
        const {dropDown ,mobileOpen}=app
        let { pathname } = location
        pathname = pathname.startsWith('/') ? pathname : `/${pathname}`
        /*路由过滤，判断前台还是后台页面。前台过滤页面注册在routeMiddleware 中 */
        if(routeMiddleware(pathname)){
            return (
                <MuiThemeProvider theme={app.theme}>
                    <div className={classes.root}>
                        <Loading loading={loading.global} fixed/>
                        <FrontNav/>
                        <main style={{minHeight:'100vh'}}>
                            {children}
                        </main>

                        {(pathname!='/login') && <FrontFooter/>}
                    </div>
                </MuiThemeProvider>
            )
        }else{
            return (
                <MuiThemeProvider theme={app.theme}>
                    <div className={classes.root}>
                        <div className={classes.appFrame}>
                            <Header app={app} classes={classes} handleUserLogout={this.handleUserLogout} handleDrawerToggle={this.handleDrawerToggle}/>
                            <Hidden mdUp implementation="css">
                                <Drawer
                                    type="temporary"
                                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                                    open={mobileOpen}
                                    classes={{
                                        paper: classes.drawerPaper,
                                    }}
                                    onClose={this.handleDrawerToggle}
                                    ModalProps={{
                                        keepMounted: true, // Better open performance on mobile.
                                    }}
                                >
                                    <LeftMenu app={app} dropDown={dropDown} classes={classes} handleClick={this.handleClick} handleChangeTheme={this.handleChangeTheme}/>
                                </Drawer>
                            </Hidden>
                            <Hidden smDown implementation="css">
                                <Drawer
                                    type="permanent"
                                    open
                                    classes={{
                                        paper: classes.drawerPaper,
                                    }}
                                    style={{width: 250}}
                                    onClose={this.handleDrawerToggle}
                                >
                                    <LeftMenu app={app} dropDown={dropDown} classes={classes} handleClick={this.handleClick} handleChangeTheme={this.handleChangeTheme}/>
                                </Drawer>
                            </Hidden>
                            <main className={classes.content}>
                                <CirLoading loading={loading.global}/>
                                <PageHeader title={app.pageHeader}/>
                                {children}
                            </main>
                        </div>
                        <Footer/>
                    </div>
                </MuiThemeProvider>
            );
        }
    }
}

ResponsiveDrawer.propTypes = {

};

export default withRouter(connect(({app,loading})=>({app,loading}))(withStyles(styles,{withTheme:true})(ResponsiveDrawer)));
