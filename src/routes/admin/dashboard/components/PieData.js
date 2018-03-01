import React from 'react';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import { Tooltip, Legend, ResponsiveContainer, Pie, PieChart, Cell } from 'recharts';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import { Icon, Menu } from 'antd';

const SubMenu = Menu.SubMenu;

const PieData = ({ data, handleChangePieData, classes }) => {
  return (<Card style={{ width: '100%', marginTop: 20, height: 598 }}>
    <AppBar position="static" style={{ position: 'relative', height: '50px' }}>
      <span style={{ position: 'absolute', left: 20, top: 0, height: 50, lineHeight: '50px', fontSize: 16 }}>Online Hot Search</span>
      <Menu
        mode="horizontal"
        style={{
          backgroundColor: 'inherit',
          position: 'absolute',
          right: 0,
          top: 0,
          height: '50px',
          borderBottom: 0,
        }}
      >
        <SubMenu style={{ borderBottom: 0 }} title={<Icon type="ellipsis" style={{ fontSize: 18, marginTop: 14, color: '#ffffff' }} />}>
          <Menu.Item key={0}>Action 1</Menu.Item>
          <Menu.Item key={1}>Action 2</Menu.Item>
        </SubMenu>
      </Menu>
    </AppBar>
    <Grid container spacing={0}>
      <Grid item xs={12} style={{ padding: '30px 20px' }}>
        <Button raised color="primary" className={classes.button} onClick={() => handleChangePieData(0)}>
          All Channels
        </Button>
        <Button raised color="primary" className={classes.button} onClick={() => handleChangePieData(1)}>
          Online
        </Button>
        <Button raised color="primary" className={classes.button} onClick={() => handleChangePieData(2)}>
          Stores
        </Button>
      </Grid>
      <div style={{ border: '1px solid #e8e8e8', width: '100%' }} />
      <ResponsiveContainer minHeight={400}>
        <PieChart minHeight={300}>
          <Pie data={data} dataKey="sales" innerRadius={70} outerRadius={90} fill="#82ca9d" label>
            {
              data.map((entry, index) => <Cell key={index} fill={entry.color} />)
            }
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Grid>
  </Card>);
}


export default PieData;
