import React from 'react'
import {connect} from 'dva'
import {withStyles} from 'material-ui/styles'
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Hidden from 'material-ui/Hidden'
import Button from 'material-ui/Button'
import classNames from 'classnames';
import {Link} from 'react-router-dom'
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer';
import {  Icon } from 'antd';
import List , { ListItem,  ListItemText } from 'material-ui/List';

import styles from './headerstyles'

const Header=({app,classes,dispatch})=>{
    function handleDrawerToggle() {
        dispatch({
            type:'app/update',
            payload:{frontOpen:!app.frontOpen}
        })
    }
    return (
        <header id="header" className={classes.header}>
            <div className={classes.logo}>
                <IconButton
                    color="accent"
                    aria-label="open drawer"
                    className={classes.navIconHide}
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon/>
                </IconButton>
                <span className={classes.headerLogo}></span>
            </div>
            <Hidden mdDown implementation="css">
                <div className={classes.signIU}>
                    {app.user? (<a href="/admin/dashboard" className={classes.login}>Dashboard</a>) :(<a href="/login" className={classes.login}>Sign In</a>)}
                </div>
                <div className={classes.nav}>
                    <ul className={classes.navLists}>
                        <li className={classes.navItem}><Link to="/" className={classes.navItemName}>Home</Link>
                        </li>
                        <li className={classes.navItem}><Link to="/blogs" className={classes.navItemName}>Blogs</Link>
                        </li>
                    </ul>
                </div>
            </Hidden>
            <Drawer open={app.frontOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={handleDrawerToggle}
                    onKeyDown={handleDrawerToggle}
                >
                    <div style={{lineHeight:'32px'}}>
                        <p style={{textAlign:'center',height:32,LineHeight:'32px',fontSize:18}}>
                            For The Best experience
                        </p>
                        <p style={{textAlign:'center',height:32,LineHeight:'32px',fontSize:14}}>
                            Please Use Chrome Browser
                        </p>
                    </div>
                    <Divider/>
                    <List style={{width:250}}>
                        <Link to="/" className={classes.drawerListLink}>
                            <ListItem button className={classes.drawerListItem}>
                               Home
                            </ListItem>
                        </Link>
                        <Link to="/blogs" className={classes.drawerListLink}>
                            <ListItem button className={classes.drawerListItem}>
                               My Blogs
                            </ListItem>
                        </Link>
                        <Link to="/login" className={classes.drawerListLogin}>
                            <ListItem button className={classes.drawerListItem}>
                                <Button raised  color="accent">Sign In</Button>
                            </ListItem>
                        </Link>
                    </List>
                </div>
            </Drawer>

        </header>
    )
}

export default connect(({app})=>({app}))(withStyles(styles)(Header))