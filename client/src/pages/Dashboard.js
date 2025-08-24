import React, { useEffect, useState } from 'react';
import MetrixCard from '../components/MetrixCard/MetrixCard';
import TradesTable from '../components/TradesTable/TradesTable';
import AnalyticsChart from '../components/AnalyticsChart/AnalyticsChart';
import {getAnalyticsData} from '../servcies/api';
import './Dashboard.css';

const Dashboard = () => {
 const[data,setData] = useState(null);

 useEffect(()=>{
    getAnalyticsData().then((res)=> setData(res));
 },[]);

 if(!data) {
      return <p className='loading'> Loading analytics...</p>
}

  return (
    <div className='dashboard-container' >
      <h1 className='dashboard-title'> Trading Analytics Dashboard</h1>
      <div className='metrix-grid'>
        <MetrixCard title="Win Rate" value={data.winRate} isPercentage={true}/>
        <MetrixCard title="Profit Factor" value={data.profitFactor}/>
        <MetrixCard title="Avg Return" value={data.avgReturn} isPercentage={true}/>
        <MetrixCard title="Max Drawdown" value={data.maxDrawdown} isPercentage={true}/>
        <MetrixCard title="Total Trades" value={data.totalTrades}/>
        <MetrixCard title="Winning Trades" value={data.winningTrades}/>
        <MetrixCard title="Losing Trades" value={data.losingTrades}/>
        <MetrixCard title="Longest Win Streak" value={data.longestWinStreak}/>
        <MetrixCard title="Longest Loss Streak" value={data.longestLossStreak}/>
        <MetrixCard title="Sharp Ratio" value={data.sharpRatio}/>
        <MetrixCard title="Total Profit/Loss (Rs.)" value={`Rs. ${data.totalProfitLoss}`}/>
        <MetrixCard title="Total Profit/Loss (%)" value={data.totalProfitLossPercent} isPercentage={true}/>
      </div>
     
      <TradesTable trades={data.recentTrades}/>

      <div >
         <AnalyticsChart trades={data.recentTrades}/>
      </div>
    </div>
  )
}

export default Dashboard
