import React from 'react'
import {
    Tooltip, Legend,ResponsiveContainer,
    BarChart,Bar,ReferenceLine,CartesianGrid,XAxis,YAxis
} from 'recharts';
const BarsChart=({height,data,dataKey,margin,stroke,fill})=>{
    return(
        <ResponsiveContainer height={height}>
            <BarChart heightt={height} data={data} stackOffset="sign"
                      margin={margin}>
                <ReferenceLine y={0} stroke={stroke}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Bar dataKey={dataKey} fill={fill} stackId="stack" />
            </BarChart>
        </ResponsiveContainer>
    )
}
export default BarsChart