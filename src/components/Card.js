import React from "react";
import '../styles/card.css';

const Card = ({src, cardName, onClick}) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={src} alt={cardName} draggable={false}/>
      <div className="text-container">
        <h2>{cardName}</h2>
      </div>
    </div>
  )
}

export default Card