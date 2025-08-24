import React from 'react'
import './AnalyticsChart.css';
import {LineChart,Line,XAxis,YAxis,Tooltip,CartesianGrid,ResponsiveContainer} from 'recharts';

const AnalyticsChart = ({trades}) => {

    // Transform trades into chart-friendly data
    const chartData = trades.map((trade,index) =>({
        name: `Trade ${index+1}`,
        profitLoss : trade.profitLoss,
    }));
  return (
    <div className='chart-container'>
      <h2> Profit/Loss Over Recent Trades</h2>
      
      <ResponsiveContainer width="100%" height={300}>
       <LineChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis 
        dataKey="name"
        interval={0}
        angle={-20}
        textAnchor='end'       
        />
        <YAxis/>
        <Tooltip/>
        <Line
        type="monotone"
        dataKey= "profitLoss"
        stroke='#4caf50'
        strokeWidth={2}
        dot = {{r : 4}}
        />
       </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AnalyticsChart
