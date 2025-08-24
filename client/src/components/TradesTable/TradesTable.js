import React from 'react'
import './TradesTable.css';


const TradesTable = ({trades}) => {
  return (
    <div className='trades-table-container'>
      <h2 className='table-title'>Recent Trades</h2>
      <table className='trades-table'> 
        <thead>
            <tr>
                <th>Trade Id</th>
                <th>Symbol</th>
                <th>Return (%)</th>
                <th>Profit/Loss</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {
                trades.map((trade)=>(
                    <tr key={trade.tradeId}>
                        <td>{trade.tradeId}</td>
                        <td>{trade.symbol}</td>
                        <td className={trade.returnPercent >= 0 ? "positive":"negative"}>{trade.returnPercent}%</td>
                        <td className={trade.profitLoss >= 0? "positive":"negative" }>{trade.profitLoss}</td>
                        <td>{trade.tradeDate}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )

}

export default TradesTable
