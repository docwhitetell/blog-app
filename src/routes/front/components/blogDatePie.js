/**
 * Created by yuhaoming on 2018/3/8.
 */
import React from 'react';
import { PieChart, Legend, Pie, Line, Tooltip, ResponsiveContainer } from 'recharts';

export default class BlogDataPie extends React.Component {
  render() {
    const { height, data } = this.props;
    return (
      <ResponsiveContainer height={height}>
        <PieChart width={800} height={height} >
          <Pie dataKey="value" data={data} cx={'50%'} cy={height / 3} innerRadius={40} outerRadius={80} fill="#82ca9d" labelLine />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
