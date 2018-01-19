import React from 'react'
import {connect} from 'dva'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Card from 'material-ui/Card'
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import {FormControl, FormHelperText, FormLabel, FormControlLabel,  FormGroup} from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Input, { InputLabel } from 'material-ui/Input';
import { Input as AntdInput , Col, Select as AntdSelect, InputNumber, DatePicker, AutoComplete, Cascader ,Radio as AntdRadio} from 'antd';

import green from 'material-ui/colors/green';
import Checkbox from 'material-ui/Checkbox';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import MdForm from './components/materialForm'
import AntdFormLogin from './components/antdForm1'
import AntdFormRegister from './components/antdForm2'
import AntdTransfer from './components/antdTransfer'
import AntdUpload from './components/antdUpload'
import AntdMultiUpload from './components/antdMutilUpload'
const AntdRadioGroup = AntdRadio.Group;
const styles=theme=>({
    formGrid:{
        padding:20,

    },
    formWrapper:{
        borderRadius:10
    },
    formHeader:{
        background:theme.palette.primary[700],
        borderRadius:'6px 6px 0 0'
    },
    formTitle:{
        color:'#ffffff',
        fontWeight:300,
        fontFamily:'inherit',
        textIndent:'1rem',
        height:50,
        lineHeight:'50px',
        borderRadius:10
    },
    formControl:{
      width:'100%',
        marginBottom:20
    },
    formControlReal:{
        marginBottom:0,
        width:'100%',
        margin:'0 auto',
    },
    textFieldReal:{
        width:'100%',
        margin:'0 auto'
    },
    formControlHalf:{
        width:'50%',
        paddingRight:20
    },
    formContent:{
        borderRadius:'0 0 6px 6px',
        padding:20
    },
    textField:{
        width:'100%',
        marginTop:0,
    },
    inputLabel:{
        fontSize:16
    },
    textFiledInput:{
        fontSize:18
    },
    checked: {
        color: green[500],
    },
})
class Form extends React.Component{
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
            radio:null,
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
            <div style={{marginTop:-68}}>
                <Grid container spacing={0}>
                    <Grid item xs={12} className={classes.formGrid}>
                        <Card className={classes.formWrapper}>
                            <div className={classes.formHeader}>
                                <h1 className={classes.formTitle}>Material Design</h1>
                            </div>
                            <div className={classes.formContent}>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} sm={6} md={5}>
                                        <FormControl className={classes.formControl}>
                                            <FormLabel style={{fontSize:24}}>Form Elements</FormLabel>
                                        </FormControl>
                                        <FormControl className={classes.formControl}>
                                            <TextField
                                                id="name"
                                                label="Label"
                                                className={classes.textField}
                                                value={this.state.input}
                                                onChange={this.handleChange}
                                                margin="normal"
                                                labelClassName={classes.inputLabel}
                                                inputClassName={classes.textFiledInput}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.formControl}>
                                            <Button raised color="primary" className={classes.button}>
                                                Upload File
                                                <input type="file" style={{opacity:0 ,position:'absolute',width:'100%',height:'100%',top:0,left:0}}/>
                                            </Button>
                                        </FormControl>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="age-simple">Age</InputLabel>
                                            <Select
                                                value={this.state.age}
                                                onChange={this.handleSelectChange('age')}
                                                input={<Input id="age-simple" />}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl className={classes.formControl}>
                                            <FormLabel component="legend">anchorOrigin.horizontal</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-label="anchorOriginHorizontal"
                                                name="anchorOriginHorizontal"
                                                value={this.state.anchorOriginHorizontal}
                                                onChange={this.handleRadioChange('anchorOriginHorizontal')}
                                            >
                                                <FormControlLabel value="left" control={<Radio />} label="Left" />
                                                <FormControlLabel value="center" control={<Radio />} label="Center" />
                                                <FormControlLabel value="right" control={<Radio />} label="Right" />
                                            </RadioGroup>
                                        </FormControl>
                                        <FormGroup row>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={this.state.checkedA}
                                                        onChange={this.handleCheckChange('checkedA')}
                                                        value="checkedA"
                                                    />
                                                }
                                                label="Option A"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={this.state.checkedB}
                                                        onChange={this.handleCheckChange('checkedB')}
                                                        value="checkedB"
                                                    />
                                                }
                                                label="Option B"
                                            />
                                            <FormControlLabel control={<Checkbox value="checkedC" />} label="Option C" />
                                            <FormControlLabel disabled control={<Checkbox value="checkedD" />} label="Disabled" />
                                            <FormControlLabel
                                                disabled
                                                control={<Checkbox checked value="checkedE" />}
                                                label="Disabled"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={this.state.checkedF}
                                                        onChange={this.handleCheckChange('checkedF')}
                                                        value="checkedF"
                                                        indeterminate
                                                    />
                                                }
                                                label="Indeterminate"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={this.state.checkedG}
                                                        onChange={this.handleCheckChange('checkedG')}
                                                        classes={{
                                                            checked: classes.checked,
                                                        }}
                                                        value="checkedG"
                                                    />
                                                }
                                                label="Custom color"
                                            />
                                        </FormGroup>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={7} style={{padding:"12px 20px"}}>
                                        <MdForm classes={classes}/>
                                    </Grid>
                                </Grid>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item xs={12} className={classes.formGrid}>
                        <Card className={classes.formWrapper}>
                            <div className={classes.formHeader} style={{backgroundColor:'#108ee9'}}>
                                <h1 className={classes.formTitle}>Ant Design</h1>
                            </div>
                            <div className={classes.formContent}>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <FormControl className={classes.formControl}>
                                            <FormLabel style={{fontSize:24}}>Base Components</FormLabel>
                                        </FormControl>
                                        <FormControl className={classes.formControl}>
                                            <AntdInput placeholder="Basic usage"/>
                                            <br/>
                                            <div>
                                                <AntdInput addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
                                            </div>
                                            <br/>
                                            <div>
                                                <AntdTransfer/>
                                            </div>
                                            <br/>
                                            <AntdRadioGroup onChange={this.handleSelectChange('radio')} value={this.state.radio}>
                                                <AntdRadio value={1}>A</AntdRadio>
                                                <AntdRadio value={2}>B</AntdRadio>
                                                <AntdRadio value={3}>C</AntdRadio>
                                                <AntdRadio value={4}>D</AntdRadio>
                                            </AntdRadioGroup>
                                            <br/>
                                            <DatePicker />
                                            <br/>
                                            <AntdSelect defaultValue="Option1-1">
                                                <Option value="Option1-1">Option1-1</Option>
                                                <Option value="Option1-2">Option1-2</Option>
                                            </AntdSelect>
                                            <br/>
                                            <label>single upload</label>
                                            <AntdUpload/>
                                            <br/>
                                            <label>single upload</label>
                                            <AntdMultiUpload/>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <FormControl className={classes.formControl}>
                                            <FormLabel style={{fontSize:24}}>Login Form</FormLabel>
                                        </FormControl>
                                        <AntdFormLogin/>
                                        <FormControl className={classes.formControl}>
                                            <FormLabel style={{fontSize:24}}>Register Form</FormLabel>
                                        </FormControl>
                                        <AntdFormRegister/>
                                    </Grid>
                                </Grid>
                            </div>
                        </Card>


                    </Grid>
                </Grid>
            </div>
        )
    }

}
export default connect(({app})=>({app}))(withStyles(styles)(Form))
