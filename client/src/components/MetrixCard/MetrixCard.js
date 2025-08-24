import React from 'react';
import './MetrixCard.css';


const MetrixCard = ({title,value,isPercentage = false}) => {

    // formatting the value (add % after the value)
    const displayValue = isPercentage ? `${value}%`:value;

    // color coding for positive/negative
    const valueClass = typeof value === "number" && value < 0? "negative" : "positive";
  return (
    <div className='metrix-card'>
      <h3 className='metrix-title'>{title}</h3>
      <p className={`metrix-value ${valueClass}`}>{displayValue}</p>
    </div>
  )
}

export default MetrixCard
