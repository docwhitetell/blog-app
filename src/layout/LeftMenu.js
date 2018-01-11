import React from 'react'
import {Link} from 'react-router-dom'
import Divider from 'material-ui/Divider';
import ListSubheader from 'material-ui/List/ListSubheader';
import List , { ListItem,  ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import {  Icon } from 'antd';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl} from 'material-ui/Form';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

import config from '../utils/config'

const LeftMenu=({dropDown,style,classes,handleClick,handleChangeTheme,app})=>{
    const selectItem=app.canChoice.map((item,index)=>{
        return (
            <MenuItem className={classes.themeItem} value={item.name} key={index}>
                {item.Lable}
                <span className={classes.themeExample} style={{background:item.color}}></span>
            </MenuItem>
        )
    })

    return(
        <div>
            <div style={{lineHeight:'32px'}}>
                <p style={{textAlign:'center',height:32,LineHeight:'32px',fontSize:18}}>
                    For The Best experience
                </p>
                <p style={{textAlign:'center',height:32,LineHeight:'32px',fontSize:14}}>
                    Please Use Chrome Browser
                </p>

            </div>
            <Divider/>
            <List style={{padding:0}}>
                <Link to="/admin/dashboard">
                    <ListItem button>
                        <Icon type="pie-chart" className={classes.menuIcon} />
                        <ListItemText disableTypography	primary="Dashboard" classes={{root:classes.menuText}}/>
                    </ListItem>
                </Link>
                <Link to="/admin/user">
                    <ListItem button>
                        <Icon type="team" className={classes.menuIcon} />
                        <ListItemText disableTypography primary="User" classes={{root:classes.menuText}}/>
                    </ListItem>
                </Link>
                <ListItem button key={0} onClick={()=>{handleClick('notes')}}>
                    <Icon type="appstore" className={classes.menuIcon} />
                    <ListItemText disableTypography primary="Blogs" classes={{root:classes.menuText}}/>
                    {dropDown.notes ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={dropDown.notes} transitionDuration="auto" unmountOnExit>
                    <Link to="/admin/blogs">
                        <ListItem button className={classes.secondMenuItem}>
                            <Icon type="bars" className={classes.menuIcon} />
                            <ListItemText disableTypography 
                                          primary="List" classes={{root:classes.secondMenuText}}/>
                        </ListItem>
                    </Link>
                    <Link to="/admin/blogs/create">
                        <ListItem button className={classes.secondMenuItem}>
                            <Icon type="edit" className={classes.menuIcon} />
                            <ListItemText disableTypography 
                                          primary="New Blog" classes={{root:classes.secondMenuText}}/>
                        </ListItem>
                    </Link>
                </Collapse>
                <ListItem button key={1} onClick={()=>{handleClick('ui')}}>
                    <Icon type="smile-o" className={classes.menuIcon} />
                    <ListItemText disableTypography primary="UI Element" classes={{root:classes.menuText}}/>
                    {dropDown.ui ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={dropDown.ui} transitionDuration="auto" unmountOnExit>
                    <Link to="/admin/UIElement/editor">
                        <ListItem button className={classes.secondMenuItem}>
                            <Icon type="edit" className={classes.menuIcon} />
                            <ListItemText disableTypography   classes={{root:classes.secondMenuText}}
                                          primary="editor"/>
                        </ListItem>
                    </Link>
                    <Link to="/admin/UIElement/table">
                        <ListItem button className={classes.secondMenuItem}>
                            <Icon type="file-text" className={classes.menuIcon} />
                            <ListItemText disableTypography  classes={{root:classes.secondMenuText}}
                                          primary="table"/>
                        </ListItem>
                    </Link>
                    <Link to="/admin/UIElement/form">
                        <ListItem button className={classes.secondMenuItem}>
                            <Icon type="file-excel" className={classes.menuIcon} />
                            <ListItemText disableTypography  classes={{root:classes.secondMenuText}}
                                          primary="form"/>
                        </ListItem>
                    </Link>
                </Collapse>

                <ListItem button key={2} onClick={()=>{handleClick('upload')}}>
                    <Icon type="cloud-upload" className={classes.menuIcon} />
                    <ListItemText disableTypography primary="Upload" classes={{root:classes.menuText}}/>
                    {dropDown.upload ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={dropDown.upload} transitionDuration="auto" unmountOnExit>
                    <Link to="/admin/multi-upload">
                        <ListItem button className={classes.secondMenuItem}>
                            <Icon type="upload" className={classes.menuIcon} />
                            <ListItemText disableTypography 
                                          primary="Multi-File Upload" classes={{root:classes.secondMenuText}}/>
                        </ListItem>
                    </Link>
                    <Link to="/admin/my-files">
                        <ListItem button className={classes.secondMenuItem}>
                            <Icon type="file" className={classes.menuIcon} />
                            <ListItemText disableTypography 
                                          primary="My Files" classes={{root:classes.secondMenuText}}/>
                        </ListItem>
                    </Link>
                    <Link to="/admin/files-lists">
                        <ListItem button className={classes.secondMenuItem}>
                            <Icon type="bars" className={classes.menuIcon} />
                            <ListItemText disableTypography 
                                          primary="Files-List" classes={{root:classes.secondMenuText}}/>
                        </ListItem>
                    </Link>
                </Collapse>
            </List>
            <div className={classes.fixedBottom}>
                <FormControl className={classes.themeSelectBox}>
                    <InputLabel htmlFor="theme" className={classes.themeLable}>Theme</InputLabel>
                    <Select
                        value={app.currentColor}
                        onChange={handleChangeTheme}
                        input={<Input id="theme" />}
                        className={classes.themeSelect}
                    >
                        {selectItem}
                    </Select>
                </FormControl>

            </div>

        </div>
    )
}

export default LeftMenu