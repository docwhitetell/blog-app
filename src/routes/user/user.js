import React from 'react'
import Table from '../../components/table/MdTable'
import {connect} from 'dva'
import keycode from 'keycode';
import {
    TableCell,
    TableRow,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
const column= [
        {id: 'id', numeric: true, disablePadding: true, label: 'Id'},
        {id: 'name', numeric: false, disablePadding: false, label: 'Name'},
        {id: 'email', numeric: false, disablePadding: false, label: 'email'},
        {id: 'created_at', numeric: false, disablePadding: false, label: 'Created_at'},
        ];
class User extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const {app,dispatch}=this.props
        if(app.pageloading){
            dispatch({type:'app/update',payload:{pageloading:false}})
        }
    }
    componentDidUpdate(){
        const {app,dispatch}=this.props
        if(app.pageloading){
            dispatch({type:'app/update',payload:{pageloading:false}})
        }
    }
    handleSelectAllClick = (event, checked) => {
        const {users,dispatch}=this.props
        if (checked) {
            dispatch({
                type:'users/update',
                payload:{ selected: users.data.map(n => n.id) }
            })
        }else{
            dispatch({
                type:'users/update',
                payload:{ selected:  []  }
            })
        }

    };
    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';
        const {users,dispatch}=this.props
        if (users.orderBy === property && users.order === 'desc') {
            order = 'asc';
        }

        const data =
            order === 'desc'
                ? users.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
                : users.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

        dispatch({
            type:'users/update',
            payload:{ data, order, orderBy }
        })
    };
    handleKeyDown = (event, id) => {
        if (keycode(event) === 'space') {
            this.handleClick(event, id);
        }
    };
    handleClick = (event, id) => {
        const {users,dispatch}=this.props
        const { selected } = users;
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
            type:'users/update',
            payload:{ selected: newSelected }
        })
    };

    handleChangePage = (event, page) => {
        const {users,dispatch}=this.props
        let newState;
        if(page+1<=users.last_page){
            newState={
                page:page+1,rowsPerPage:users.rowsPerPage
            }
        }else{
            newState={
                page:page,rowsPerPage:users.rowsPerPage
            }
        }
        dispatch({
            type:'users/getUserList',
            payload:newState
        })
    };

    handleChangeRowsPerPage = event => {
        const {dispatch } = this.props;
        //this.setState({ rowsPerPage: event.target.value });
        const newSize={rowsPerPage:event.target.value,page:1}
        dispatch({
            type:'users/changeRowsPerPage',
            payload:newSize
        })
    };

    handleDialogOpenOrHide=()=>{
        const {dispatch}=this.props
        dispatch({
            type:'users/showOrHideDialog'
        })
    }


    handleSelectedAction=()=>{
        const {users,dispatch}=this.props
        dispatch({
            type:'users/deleteUser',
            payload:users.selected
        })
    }
    handleEmptyAction=()=>{

    }
    isSelected = (id) => {
        const {users}=this.props
        return users.selected.indexOf(id) !== -1;
    }
    render(){
        const {app,users}=this.props
        const props={}
        props.theme=app.currentTheme
        props.table=users
        props.column= column
        props.dispatch=this.props.dispatch
        props.handleSelectAllClick=this.handleSelectAllClick
        props.handleRequestSort=this.handleRequestSort
        props.handleChangePage=this.handleChangePage
        props.handleChangeRowsPerPage=this.handleChangeRowsPerPage
        props.handleDialogOpenOrHide=this.handleDialogOpenOrHide
        /*props.isSelected=this.isSelected*/
        props.handleSelectedAction=this.handleSelectedAction
        props.handleEmptyAction=this.handleEmptyAction
        return(
            <div style={{marginTop:-68}}>
                <div style={{margin:20}}>
                    <Table {...props}>
                        {users.data.map(n => {
                            const Selected = this.isSelected(n.id);
                            return (
                                <TableRow
                                    hover
                                    onClick={event =>this.handleClick(event, n.id)}
                                    onKeyDown={event => this.handleKeyDown(event, n.id)}
                                    role="checkbox"
                                    aria-checked={Selected}
                                    tabIndex={-1}
                                    key={n.id}
                                    selected={Selected}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox checked={Selected} />
                                    </TableCell>
                                    <TableCell numeric padding="none">{n.id}</TableCell>
                                    <TableCell>{n.name}</TableCell>
                                    <TableCell>{n.email}</TableCell>
                                    <TableCell>{n.created_at}</TableCell>
                                </TableRow>
                            );
                        })}
                    </Table>
                </div>

            </div>
        )
    }

}
export default connect(({app,users})=>({app,users}))(User)