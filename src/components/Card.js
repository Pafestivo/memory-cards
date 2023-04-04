import React from "react";
import '../styles/card.css';

const Card = ({src, cardName}) => {
  return (
    <div className="card">
      <img src={src} alt={cardName} />
      <div className="text-container">
        <h2>{cardName}</h2>
      </div>
    </div>
  )
}

export default Card