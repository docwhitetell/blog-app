/**
 * Created by yuhaoming on 2018/3/8.
 */
import React from 'react';
import { PieChart, Pie, Line, Tooltip, ResponsiveContainer } from 'recharts';

export default class BlogDataPie extends React.Component {
  render() {
    const { height, data } = this.props;
    console.log(data)
    return (
      <ResponsiveContainer height={height}>
        <PieChart width={800} height={height} >
          <Pie data={data} cx={'50%'} cy={height / 3} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
