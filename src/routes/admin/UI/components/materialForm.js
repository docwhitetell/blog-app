import React from 'react'

import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import {FormControl, FormLabel, FormControlLabel, } from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
class MdForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            input:'',
            anchorOriginHorizontal: 'center',
            age:10,
            checkedA: true,
            checkedB: false,
            checkedF: true,
            checkedG: true,
        }
    }
    handleChange=(e)=>{
        this.setState({
            input:e.target.value
        })
    }
    handleRadioChange = key => (event, value) => {
        this.setState({
            [key]: value,
        });
    };
    handleSelectChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    handleCheckChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    render(){
        const {classes}=this.props
        return(
            <div>
                <FormControl className={classes.formControl}>
                    <FormLabel style={{fontSize:24}}>Common Form</FormLabel>
                </FormControl>
                <FormControl className={classes.formControlReal}>
                    <TextField
                        id="name"
                        label="User Name"
                        className={classes.textFieldReal}
                        value={this.state.input}
                        onChange={this.handleChange}
                        margin="normal"
                        labelClassName={classes.inputLabel}
                        inputClassName={classes.textFiledInput}
                    />
                </FormControl>
                <FormControl className={classes.formControlReal}>
                    <TextField
                        id="email"
                        label="Email"
                        className={classes.textFieldReal}
                        value={this.state.input}
                        onChange={this.handleChange}
                        margin="normal"
                        labelClassName={classes.inputLabel}
                        inputClassName={classes.textFiledInput}
                    />
                </FormControl>
                <FormControl className={classes.formControlReal}>
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        className={classes.textFieldReal}
                        value={this.state.input}
                        onChange={this.handleChange}
                        margin="normal"
                        labelClassName={classes.inputLabel}
                        inputClassName={classes.textFiledInput}
                    />
                </FormControl>
                <FormControl className={classes.formControlReal}>
                    <TextField
                        id="password_comfirmation"
                        label="Password Comfirm"
                        type="password"
                        className={classes.textFieldReal}
                        value={this.state.input}
                        onChange={this.handleChange}
                        margin="normal"
                        labelClassName={classes.inputLabel}
                        inputClassName={classes.textFiledInput}
                    />
                </FormControl>
                <FormControl className={classes.formControlReal}>
                    <TextField
                        id="phone"
                        label="Phone Number"
                        type="number"
                        className={classes.textFieldReal}
                        value={this.state.input}
                        onChange={this.handleChange}
                        margin="normal"
                        labelClassName={classes.inputLabel}
                        inputClassName={classes.textFiledInput}
                    />
                </FormControl>
                <FormControl className={classes.formControlHalf}>
                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                    <Select
                        value={this.state.age}
                        onChange={this.handleSelectChange('age')}
                        input={<Input id="age-simple"/>}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControlHalf}>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormControl>
                <FormControl className={classes.formControlReal}>
                    <FormLabel component="legend">anchorOrigin.horizontal</FormLabel>
                    <RadioGroup
                        row
                        aria-label="anchorOriginHorizontal"
                        name="anchorOriginHorizontal"
                        value={this.state.anchorOriginHorizontal}
                        onChange={this.handleRadioChange('anchorOriginHorizontal')}
                    >
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                    </RadioGroup>
                </FormControl>
                <FormControl className={classes.formControlReal}>
                    <Button raised color="primary" className={classes.button}>
                        Submit
                    </Button>
                </FormControl>
            </div>
        )
    }
}

export default MdForm