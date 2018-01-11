import React from 'react'
import {connect} from 'dva'
import { FormControl } from 'material-ui/Form';
import styles from './RegisterForm.css'
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            email:'',
            password:'',
            password_confirmation:'',
            error:{
                name:null,
                email:null,
                password:null,
                password_confirmation:null,
            }
        }
    }
    handleInputChange=(e)=>{
        const key=e.target.getAttribute('name')
        switch(key){
            case 'name':
                this.setState({
                    name: e.target.value ,
                    error:{
                        name:null
                    }
                })
                break
            case 'email':
                this.setState({
                    email: e.target.value,
                    error:{
                        email:null
                    }
                });
                break
            case 'password':
                this.setState({
                    password: e.target.value ,
                    error:{
                        password:null
                    }
                });
                break
            case 'password_confirmation':
                this.setState({
                    password_confirmation: e.target.value,
                    error:{
                        password_confirmation:null
                    }
                });
                break
            default:
        }
    }

    handleFormSubmit=(e)=>{
        e.preventDefault()
        const data={
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            password_confirmation:this.state.password_confirmation
        }
        const {users,dispatch}=this.props
        dispatch({
            type:'users/addUser',
            payload:data
        })
    }
    render()
    {
        const {users}=this.props
       const classes=styles
        return (
            <div className={classes.container}>
                <form onSubmit={this.handleFormSubmit}>
                    <FormControl className={classes.formControl} fullWidth>
                        <TextField
                            margin="dense"
                            id="name"
                            name="name"
                            label="Name"
                            type="text"
                            fullWidth
                            onChange={this.handleInputChange}
                        />
                        {users.error.name && <p className={classes.errormsg}>{users.error.name}</p>}
                    </FormControl>
                    <FormControl className={classes.formControl} fullWidth>
                        <TextField
                            margin="dense"
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            fullWidth
                            onChange={this.handleInputChange}
                        />
                        {users.error.email && <p className={classes.errormsg}>{users.error.email}</p>}
                    </FormControl>
                    <FormControl className={classes.formControl} fullWidth>
                        <TextField
                            margin="dense"
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            fullWidth
                            onChange={this.handleInputChange}
                        />
                        {users.error.password && <p className={classes.errormsg}>{users.error.password}</p>}
                    </FormControl>
                    <FormControl className={classes.formControl} fullWidth>
                        <TextField
                            margin="dense"
                            id="password_confrim"
                            label="Password Confirmation"
                            name="password_confirmation"
                            type="password"
                            fullWidth
                            onChange={this.handleInputChange}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl} style={{marginTop:'20px'}} fullWidth>
                        <Button raised color="accent" type="submit" style={{margin:'0 auto',width:'100px'}}>
                            Register
                        </Button>
                    </FormControl>
                </form>


            </div>
        );
    }
}


export default connect(({users,dispatch})=>({users,dispatch}))(RegisterForm)