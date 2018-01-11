import React from 'react'
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { Menu, Icon } from 'antd';
import config from '../utils/config'

const SubMenu = Menu.SubMenu;

const Header =({app,classes,handleUserLogout,handleDrawerToggle})=>{

    return (
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar className={classes.toolbar}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    className={classes.navIconHide}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography style={{color:'inherit',fontSize:32}} type="title" noWrap>
                    {config.name}
                </Typography>
                {app.user !== null &&
                <div style={{position: 'absolute', right: '20px',backgroundImage:"url('/assets/buttonbg1.png')",backgroundRepeat:'no-repeat',backgroundSize:'90%',backgroundPosition:'center center'}}>
                    <Menu
                        mode="horizontal"
                        style={{backgroundColor: 'inherit', borderBottom: 'none !important'}}
                        onClick={handleUserLogout}
                        theme="light"
                    >
                        <SubMenu title={<span style={{color: '#ffffff',fontWeight:300,fontSize:14,borderBottom:'none !important'}}><Icon
                            type="user"/>{app.user.name}</span>}>
                            <Menu.Item key="logout"><Icon type="logout"/>Logout</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header