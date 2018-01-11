import React from 'react'
import {LineChart, Line,
    XAxis, YAxis, CartesianGrid,
    Tooltip, Legend,ResponsiveContainer,
} from 'recharts';
const LinesChart =({height,data,dataKey,margin,stroke,XAxisKey})=>{
    return(
        <ResponsiveContainer height={height}>
            <LineChart height={height} data={data}
                       margin={margin}>
                <XAxis dataKey={XAxisKey}/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Line type="monotone" dataKey={dataKey} stroke={stroke} activeDot={{r: 8}}/>
            </LineChart>
        </ResponsiveContainer>
    )
}
export default LinesChart