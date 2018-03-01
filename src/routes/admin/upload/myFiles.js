import React from 'react'
import {connect} from 'dva'
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import CirLoading from '../../../components/loading/CirLoading'
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile } from 'material-ui/GridList';
import Tabs, { Tab } from 'material-ui/Tabs';
import {Icon} from 'antd'
import styles from './styles'
class myFiles extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        const {app,dispatch}=this.props

        dispatch({
            type:'files/query',
            payload:{pageSize:15}
        })
    }
    componentDidUpdate(){

    }

    handleRequestClose=(index)=>{
        //console.log(index)
        const {dispatch}=this.props
        dispatch({
            type:'files/dialogClose',
            payload:index
        })
    }
    handleOpen=(index)=>{
        //console.log(index)
        const {dispatch}=this.props
        dispatch({
            type:'files/dialogOpen',
            payload:index
        })
    }
    handleDelete=(id)=>{
        //console.log(id)
        const {dispatch}=this.props
        dispatch({
            type:'files/delete',
            payload:id
        })
    }
    handleAlertOpen=(index)=>{
        const {dispatch}=this.props
        dispatch({
            type:'files/alertOpen',
            payload:index
        })
    }
    handleAlertClose=(index)=>{
        //console.log(index)
        const {dispatch}=this.props
        dispatch({
            type:'files/alertClose',
            payload:index
        })
    }
    handleTabsChange=(event,value)=>{
        console.log(value)
        const {dispatch}=this.props
        dispatch({
            type:'files/update',
            payload:{
                tabs:value,
                filesList:[],
            }
        })
        value===1?dispatch({type:'files/queryVideos'}):dispatch({type:'files/query',payload:{pageSize:15}})

    }

    render(){
        const {files,classes}=this.props
        const {filesList,open,alert,tabs}=files
        return (
            <div style={{marginTop: -68}}>
                <div className={classes.tabsroot} style={{maxWidth: 860, margin: '20px auto'}}>
                    <AppBar position="static" color="default">
                        <Tabs value={tabs} onChange={this.handleTabsChange} indicatorColor="primary" centered>
                            <Tab label="Images"/>
                            <Tab label="Videos"/>
                        </Tabs>
                    </AppBar>
                    {tabs === 0 &&
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {filesList.map((item, index) => {
                            return (
                                <GridListTile key={index} cols={1} className={classes.gridItem}>
                                    <img src={item.path} style={{width: '100%', height: '100%'}} alt=""/>
                                    <div className={classes.mask}>
                                        <div className={classes.Delete}><Icon type="delete"
                                                                              className={classes.DeleteIcon}
                                                                              onClick={() => this.handleAlertOpen(index, item.id)}/>
                                        </div>
                                        <div className={classes.Play}><Icon type="eye-o" className={classes.PlayIcon}
                                                                            onClick={() => this.handleOpen(index)}/>
                                        </div>
                                    </div>
                                    <Dialog open={alert[index]} onClose={() => this.handleAlertClose(index)}>
                                        <DialogTitle>{"Delete ？"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                ARE YOU SURE YOU DON'T NEED IT ANY MORE?<br/>
                                                （{item.original_name}）
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => this.handleDelete(item.id)} color="primary">
                                                YES
                                            </Button>
                                            <Button onClick={() => this.handleAlertClose(index)} color="primary"
                                                    autoFocus>
                                                NO
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    <Dialog open={open[index]} onClose={() => this.handleRequestClose(index)}
                                            maxWidth="md">
                                        <DialogTitle>{item.original_name}</DialogTitle>
                                        <DialogContent>
                                            <img src={item.path} style={{width: '100%'}} alt=""/>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => this.handleRequestClose(index)} color="primary">
                                                Close
                                            </Button>
                                        </DialogActions>
                                    </Dialog>

                                </GridListTile>
                            )
                        })}
                    </GridList>
                    }

                    {tabs === 1 &&
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                        {filesList.map((item, index) => {
                            return (
                                <GridListTile key={index} cols={1} className={classes.gridItem}>
                                    <CardMedia
                                        style={{objectit: 'fill', height: '100%'}}
                                        component="video"
                                        src={item.path}
                                        muted
                                    />
                                    <div className={classes.videoMask}>
                                        <h1 className={classes.videoTitle}>{item.original_name}</h1>
                                        <div className={classes.Delete}><Icon type="delete"
                                                                              className={classes.DeleteIcon}
                                                                              onClick={() => this.handleAlertOpen(index, item.id)}/>
                                        </div>
                                        <div className={classes.Play}><Icon type="play-circle"
                                                                            className={classes.PlayIcon}
                                                                            onClick={() => this.handleOpen(index)}/>
                                        </div>
                                    </div>
                                    <Dialog open={alert[index]} onRequestClose={() => this.handleAlertClose(index)}>
                                        <DialogTitle>{"Delete ？"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                ARE YOU SURE YOU DON'T NEED IT ANY MORE?<br/>
                                                （{item.original_name}）
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => this.handleDelete(item.id)} color="primary">
                                                YES
                                            </Button>
                                            <Button onClick={() => this.handleAlertClose(index)} color="primary"
                                                    autoFocus>
                                                NO
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    <Dialog open={open[index]} onRequestClose={() => this.handleRequestClose(index)}
                                            maxWidth="md">
                                        <DialogTitle>{item.original_name}</DialogTitle>
                                        <DialogContent>
                                            <CardMedia
                                                component="video"
                                                src={item.path}
                                                autoPlay
                                                controls
                                            />
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={() => this.handleRequestClose(index)} color="primary">
                                                Close
                                            </Button>
                                        </DialogActions>
                                    </Dialog>

                                </GridListTile>
                            )
                        })}
                    </GridList>
                    }
                </div>
            </div>
        )
    }

}
export default connect(({app,files})=>({app,files}))(withStyles(styles)(myFiles));
