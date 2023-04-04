import React from "react";
import '../styles/card.css';

const Card = ({src, cardName, onClick, id}) => {
  return (
    <div id={id} className="card" onClick={onClick}>
      <img id={id} src={src} alt={cardName} draggable={false}/>
      <div id={id} className="text-container">
        <h2 id={id}>{cardName}</h2>
      </div>
    </div>
  )
}

export default Card