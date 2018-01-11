import React from 'react'
import {withStyles} from 'material-ui/styles'
import Table from '../../components/table/MdTable'
import {connect} from 'dva'
import keycode from 'keycode';
import Button from 'material-ui/Button';
import {
    TableCell,
    TableRow,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit'

import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    withMobileDialog,
} from 'material-ui/Dialog';
import Grid from 'material-ui/Grid'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import styles from './styles'
//({app,blogs,loading,dispatch,classes})


const column= [
    {id: 'id', numeric: true, disablePadding: true, label: 'Id'},
    {id: 'title', numeric: false, disablePadding: false, label: 'Title'},
    {id: 'content', numeric: false, disablePadding: false, label: 'Content'},
    {id: 'created_at', numeric: false, disablePadding: false, label: 'Created_at'},
    {id: 'updated_at', numeric: false, disablePadding: false, label: 'updated_at'},
    {id: 'action', numeric: false, disablePadding: false, label: 'Edit'},
]

class List extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {app, dispatch} = this.props
        if (app.pageloading) {
            dispatch({type: 'app/update', payload: {pageloading: false}})
        }
    }

    componentDidUpdate() {
        const {app, dispatch} = this.props
        if (app.pageloading) {
            dispatch({type: 'app/update', payload: {pageloading: false}})
        }
    }

    handleSelectAllClick = (event, checked) => {
        const {blogs, dispatch} = this.props
        if (checked) {
            dispatch({
                type: 'blogs/update',
                payload: {selected: blogs.data.map(n => n.id)}
            })
        } else {
            dispatch({
                type: 'blogs/update',
                payload: {selected: []}
            })
        }
    }
    handleRequestSort = (event, property) => {
        const {blogs, dispatch} = this.props
        const orderBy = property;
        let order = 'desc';
        if (blogs.orderBy === property && blogs.order === 'desc') {
            order = 'asc';
        }
        const data =
            order === 'desc'
                ? blogs.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
                : blogs.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

        dispatch({
            type: 'blogs/update',
            payload: {data, order, orderBy}
        })
    }
    handleKeyDown = (event, id) => {
        if (keycode(event) === 'space') {
            this.handleClick(event, id);
        }
    }
    handleClick = (event, id) => {
        const {blogs, dispatch} = this.props
        const {selected} = blogs;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        dispatch({
            type: 'blogs/update',
            payload: {selected: newSelected}
        })
    }
    handleChangePage = (event, page) => {
        const {blogs, dispatch} = this.props
        let newState;
        if (page + 1 <= blogs.last_page) {
            newState = {
                page: page + 1, rowsPerPage: blogs.rowsPerPage
            }
        } else {
            newState = {
                page: page, rowsPerPage: blogs.rowsPerPage
            }
        }
        dispatch({
            type: 'blogs/getUserList',
            payload: newState
        })
    }
    handleChangeRowsPerPage = (event) => {
        const {dispatch} = this.props
        const newSize = {rowsPerPage: event.target.value, page: 1}
        dispatch({
            type: 'blogs/changeRowsPerPage',
            payload: newSize
        })
    }
    isSelected = (id) => {
        const {blogs} = this.props
        return blogs.selected.indexOf(id) !== -1;
    }
    handleSelectedAction = () => {
        const {blogs, dispatch} = this.props
        dispatch({
            type: 'blogs/deleteBlog',
            payload: blogs.selected
        })
    }
    handleEmptyAction = () => {

    }

    handleDelete=(id)=>{
        const {dispatch}=this.props
        dispatch({
            type:'blogs/deleteBlog',
            payload:id
        })
    }
    handleDialogOpen=(index)=>{
        const {blogs,dispatch}=this.props
        //console.log(index)
        let open=blogs.open
        open[index]=true
        /*for(var i=0;i<open.length;i++){
            open[i]=false
        }*/
        dispatch({
            type:'blogs/update',
            payload:{
                open:open
            }
        })
    }
    handleRequestClose=()=>{
        const {dispatch,blogs}=this.props
        let open=blogs.open
        for(var i=0;i<open.length;i++){
            open[i]=false
        }
        dispatch({
            type:'blogs/update',
            payload:{
                open:open
            }
        })
    }
    handleCreateBlog = () => {
        const {dispatch} = this.props
        dispatch({
            type: 'blogs/create'
        })
    }
    handleEdit = (id) => {
        const {dispatch} = this.props
        console.log(id)
        dispatch({
            type: 'blogs/edit',
            payload: id
        })
    }
    render(){
        const {app,blogs,loading,dispatch,classes}=this.props
        const props={}
        props.theme=app.currentTheme
        props.table=blogs
        props.column=column
        props.loading=loading
        props.dispatch=dispatch

        /*全选点击事件*/
        props.handleSelectAllClick=this.handleSelectAllClick
        /*排序事件*/
        props.handleRequestSort=this.handleRequestSort
        /*翻页事件*/
        props.handleChangePage=this.handleChangePage
        /*改变每页行数*/
        props.handleChangeRowsPerPage=this.handleChangeRowsPerPage
        /*选择后的toolbar事件*/
        props.handleSelectedAction=this.handleSelectedAction
        /*每页选择的toolbar事件*/
        props.handleEmptyAction=this.handleEmptyAction


        return(
            <div style={{marginTop:-68}}>
                <div style={{width:'90%',margin:'20px auto 10px auto'}}>
                  {/*  <Table {...props}>
                        {blogs.data.map(n => {
                            const Selected = this.isSelected(n.id);
                            return (
                                <TableRow
                                    hover
                                    onKeyDown={event => this.handleKeyDown(event, n.id)}
                                    role="checkbox"
                                    aria-checked={Selected}
                                    tabIndex={-1}
                                    key={n.id}
                                    selected={Selected}
                                >
                                    <TableCell onClick={event =>this.handleClick(event, n.id)} padding="checkbox">
                                        <Checkbox checked={Selected} />
                                    </TableCell>
                                    <TableCell numeric padding="none">{n.id}</TableCell>
                                    <TableCell className={classes.tableCell}>{n.title}</TableCell>
                                    <TableCell className={classes.tableCell}>{n.content}</TableCell>
                                    <TableCell className={classes.tableCell}>{n.created_at}</TableCell>
                                    <TableCell className={classes.tableCell}>{n.updated_at}</TableCell>
                                    <TableCell className={classes.tableCell}>
                                        <IconButton aria-label="Edit" color="primary" onClick={()=>{this.handleEdit(n.id)}}>
                                            <EditIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </Table>*/}
                    <Grid container spacing={24}>
                        {blogs.data.map((item,index)=>{
                        return(
                            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        style={{height:200}}
                                        image={item.poster}
                                        title={item.title}
                                    />
                                    <CardContent style={{paddingBottom:0}}>
                                        <Typography type="headline" component="h3"
                                                    style={{textOverflow:'ellipsis',overflow:'hidden',whiteSpace:'nowrap',fontSize:20,fontWeight:600,color:"rgba(0,0,0,0.9)"}}>
                                            {item.title}
                                        </Typography>
                                        <Typography component="p"
                                                    style={{
                                                        textOverflow:'ellipsis',
                                                        whiteSpace:'nowrap',overflow:'hidden',fontWeight:600,color:"rgba(0,0,0,0.7)"
                                                    }}>
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button dense color="primary" onClick={()=>{this.handleEdit(item.id)}}>
                                            Edit
                                        </Button>
                                        <Button dense color="primary" onClick={()=>{this.handleDialogOpen(index)}}>
                                            Delete
                                        </Button>
                                        <Button dense color="default">
                                            {item.created_at}
                                        </Button>
                                    </CardActions>
                                </Card>
                                <Dialog
                                    fullScreen={false}
                                    open={blogs.open[index]}
                                    onRequestClose={this.handleRequestClose}
                                >
                                    <DialogTitle>{"Delete Your Article?"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Blog：{item.title}
                                            <br/>
                                            Are you sure you want to delete this article?Once you deleted!You can not find it back!
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.handleRequestClose} color="primary">
                                            No
                                        </Button>
                                        <Button raised onClick={()=>this.handleDelete(item.id)} color="accent" autoFocus>
                                            Yes
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Grid>

                        )
                    })}

                    </Grid>

                </div>

                <div style={{width:'90%',margin:'10px auto'}}>
                    <Button raised color="primary" onClick={this.handleCreateBlog} style={{width:'100%'}}>
                        New Blog
                    </Button>
                </div>
            </div>)
    }

}

export default connect(({app,blogs,loading})=>({app,blogs,loading}))(withStyles(styles)(List))