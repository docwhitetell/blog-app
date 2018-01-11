import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';

import Card  from 'material-ui/Card';

import BarsChartWithXY from '../../../components/charts/BarChartWithXY'
import LinesChartWithXY from '../../../components/charts/LineChartWithXY'
import DraggableList from '../../../components/draggable/DraggableList'



const TabData=({dashboard,classes,data,handleTabChange})=>{
    return(
        <Card style={{width:'100%',minHeight:400}}>
            <AppBar position="static" style={{position:'relative'}}>
                <Tabs value={dashboard.tabs} onChange={handleTabChange} style={{width:'50%'}}>
                    <Tab label="Sales Number" />
                    <Tab label="Visits" />
                </Tabs>
                <form style={{width:'160px',position:'absolute',top:2,right:20}}>
                    <TextField
                        id="date"
                        label="Choice Date"
                        type="date"
                        style={{color:'#ffffff'}}
                        defaultValue="2017-05-24"
                        className={classes.textField}
                        labelClassName={classes.formLabel}
                        InputLabelProps={{
                            shrink: true,
                            color:'#ffffff'
                        }}
                    />
                </form>
            </AppBar>
            {dashboard.tabs === 0 &&
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}  md={7} lg={8}>
                    <BarsChartWithXY
                        height={352}
                        data={data}
                        dataKey="value"
                        margin={{top: 20, right: 20, left: -20, bottom: 20}}
                        stroke='#000'
                        fill="#8884d8"/>
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                    <h1 style={{fontWeight:400,fontSize:28,color:'#263238',paddingTop:10}}>Drag to Reorder List</h1>
                    <DraggableList/>
                </Grid>
            </Grid>
            }
            {dashboard.tabs === 1 &&
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}  md={7} lg={8}>
                    <LinesChartWithXY
                        height={352}
                        data={data}
                        dataKey="value"
                        XAxisKey="name"
                        margin={{top: 20, right: 20, left: -20, bottom: 0}}
                        stroke="#8884d8"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={5} lg={4}>
                    <h1 style={{fontWeight:400,fontSize:28,color:'#263238',paddingTop:10}}>Store Sales Rank 2.0</h1>
                    <ul className={classes.salesRank}>
                        <li className={classes.salesRankItem}>
                            <span className={classes.salesItemLeftTop}>1</span>
                            <span className={classes.salesItemMid}>Doc.White 官方旗舰店 1 号店</span>
                            <span className={classes.salesItemRight}>323,234</span>
                        </li>
                        <li className={classes.salesRankItem}>
                            <span className={classes.salesItemLeftTop}>2</span>
                            <span className={classes.salesItemMid}>Doc.White 官方旗舰店 2 号店</span>
                            <span className={classes.salesItemRight}>323,234</span>
                        </li>
                        <li className={classes.salesRankItem}>
                            <span className={classes.salesItemLeftTop}>3</span>
                            <span className={classes.salesItemMid}>Doc.White 官方旗舰店 3 号店</span>
                            <span className={classes.salesItemRight}>323,234</span>
                        </li>
                        <li className={classes.salesRankItem}>
                            <span className={classes.salesItemLeft}>4</span>
                            <span className={classes.salesItemMid}>Doc.White 官方旗舰店 4 号店</span>
                            <span className={classes.salesItemRight}>323,234</span>
                        </li>
                        <li className={classes.salesRankItem}>
                            <span className={classes.salesItemLeft}>5</span>
                            <span className={classes.salesItemMid}>Doc.White 官方旗舰店 5 号店</span>
                            <span className={classes.salesItemRight}>323,234</span>
                        </li>
                        <li className={classes.salesRankItem}>
                            <span className={classes.salesItemLeft}>6</span>
                            <span className={classes.salesItemMid}>Doc.White 官方旗舰店 6 号店</span>
                            <span className={classes.salesItemRight}>323,234</span>
                        </li>
                        <li className={classes.salesRankItem}>
                            <span className={classes.salesItemLeft}>7</span>
                            <span className={classes.salesItemMid}>Doc.White 官方旗舰店 7 号店</span>
                            <span className={classes.salesItemRight}>323,234</span>
                        </li>
                        <li className={classes.salesRankItem}>
                            <span className={classes.salesItemLeft}>8</span>
                            <span className={classes.salesItemMid}>Doc.White 官方旗舰店 8 号店</span>
                            <span className={classes.salesItemRight}>323,234</span>
                        </li>
                    </ul>
                </Grid>
            </Grid>
            }
        </Card>
    )
}
export default TabData
