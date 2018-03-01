import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import NumberCard from './components/NumberCard'
import DataCard from './components/DataCard'
import TabData from './components/TabData'
import TableData from './components/TableData'
import PieData from './components/PieData'

import styles from './styles'

const salseData=[
    [{name:'Household appliances',percent:'28.79%',sales:4544,color:'#F44336'},
        {name:'Consumption of alcohol',percent:'21.04%',sales:3321,color:'#E91E63'},
        {name:'Personal health',percent:'19.73%',sales:3113,color:'#3F51B5'},
        {name:'Clothing bags',percent:'14.83%',sales:2341,color:'#2196F3'},
        {name:'Maternal and child products',percent:'7.80',sales:1231,color:'#009688'},
        {name:'Other',percent:'7.80%',sales:1231,color:'#FFEB3B'},
    ],
    [{name:'Household appliances',percent:'18.79%',sales:2544,color:'#F44336'},
        {name:'Consumption of alcohol',percent:'31.04%',sales:4321,color:'#E91E63'},
        {name:'Personal health',percent:'9.73%',sales:1113,color:'#3F51B5'},
        {name:'Clothing bags',percent:'24.83%',sales:2341,color:'#2196F3'},
        {name:'Maternal and child products',percent:'7.80',sales:1231,color:'#009688'},
        {name:'Other',percent:'7.80%',sales:1231,color:'#FFEB3B'},
    ],
    [{name:'Household appliances',percent:'12.79%',sales:1044,color:'#F44336'},
        {name:'Consumption of alcohol',percent:'16.04%',sales:1321,color:'#E91E63'},
        {name:'Personal health',percent:'25.73%',sales:2413,color:'#3F51B5'},
        {name:'Clothing bags',percent:'32.83%',sales:3341,color:'#2196F3'},
        {name:'Maternal and child products',percent:'7.80',sales:1231,color:'#009688'},
        {name:'Other',percent:'7.80%',sales:1231,color:'#FFEB3B'},
    ],
]

//{dashboard,dispatch,classes}
class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    handleTabChange=(event, value)=>{
        const {dispatch}=this.props
        dispatch({
            type:'dashboard/update',
            payload:{tabs:value}
        })
    }
    handleTablePageChange=(pagination, filters, sorter)=>{
        const {dashboard,dispatch}=this.props
        if(pagination.current===dashboard.pagination.current){
        }else{
            dispatch({
                type:'dashboard/getTableData',
                payload:pagination
            })
        }
    }
    handleChangePieData=(index)=>{
        const {dispatch}=this.props
        console.log(index)
        dispatch({
            type:'dashboard/update',
            payload:{sales:salseData[index]}
        })
    }

    render(){
        const {dashboard,dispatch,classes}=this.props
        return(
            <div style={{marginTop:-68}}>
                <NumberCard classes={classes}/>
                <DataCard classes={classes} data={dashboard.data}/>

                <div style={{width:'96%',margin:'0 auto',padding:4}}>
                    <TabData dashboard={dashboard} data={dashboard.data} classes={classes} handleTabChange={this.handleTabChange}/>
                    <Grid container spacing={8} >
                        <Grid item xs={12} lg={6}>
                            <TableData data={dashboard} handleTablePageChange={this.handleTablePageChange}/>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <PieData data={dashboard.sales} handleChangePieData={this.handleChangePieData} classes={classes}/>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )

    }


}


export default connect(({app,dashboard})=>({app,dashboard}))(withStyles(styles)(Dashboard));
