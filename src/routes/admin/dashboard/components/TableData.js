import React from 'react';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';

import Card from 'material-ui/Card';

import {Icon,Menu} from 'antd'
import AntdTable from '../../../../components/table/antdTable'
import AreasChart from '../../../../components/charts/AreasChart'

const SubMenu = Menu.SubMenu;

const tableColumns = [{
    title: 'Rank',
    dataIndex: 'id',
    sorter: (a,b)=>a.id-b.id,
}, {
    title: 'Key Word',
    dataIndex: 'word',
}, {
    title: 'User Number',
    dataIndex: 'userNumber',
    sorter:(a,b)=>a.userNumber-b.userNumber,
}, {
    title: 'Rose',
    dataIndex: 'rose',
    sorter:(a,b)=>a.rose-b.rose,
    render: rose => `${rose} %`,
}
];

const TableData=({data,handleTablePageChange})=>{
    return(
        <Card style={{width: '100%', marginTop: 20, minHeight: 400}}>
            <AppBar position="static" style={{position: 'relative', height: '50px'}}>
                        <span style={{
                            position: 'absolute',
                            left: 20,
                            top: 0,
                            height: 50,
                            lineHeight: '50px',
                            fontSize: 16
                        }}>Online Hot Search Table</span>
                <Menu
                    mode="horizontal"
                    style={{
                        backgroundColor: 'inherit',
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        height: '50px',
                        borderBottom: 0
                    }}
                >
                    <SubMenu style={{borderBottom: 0}} title={<Icon type="ellipsis" style={{
                        fontSize: 18,
                        marginTop: 14,
                        color: '#ffffff'
                    }}/>}>
                        <Menu.Item key={0}>Action 1</Menu.Item>
                        <Menu.Item key={1}>Action 2</Menu.Item>
                    </SubMenu>
                </Menu>
            </AppBar>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6} style={{padding: 20}}>
                    <h3 style={{color: '#757575'}}>
                        Search Users  &nbsp;&nbsp;
                        <span><Icon type="info-circle-o"/></span>
                    </h3>
                    <AreasChart height={80} data={data.pd} dataKey="pv" stroke='#108ee9' fill='#108ee9' margin={{top: 0, right: 0, left: 0, bottom: 0}}/>
                </Grid>
                <Grid item xs={12} sm={6} style={{padding: 20}}>
                    <h3 style={{color: '#757575'}}>
                        Per capita search times  &nbsp;&nbsp;
                        <span><Icon type="info-circle-o"/></span>
                    </h3>
                    <AreasChart height={80} data={data.bd} dataKey="pv" stroke='#108ee9' fill='#108ee9' margin={{top: 0, right: 0, left: 0, bottom: 0}}/>
                </Grid>
                <Grid item xs={12} style={{padding:20}}>
                    <AntdTable data={data.search} columns={tableColumns} pagination={data.pagination} handleChange={handleTablePageChange}/>
                </Grid>
            </Grid>
        </Card>
    )
}
export default TableData
