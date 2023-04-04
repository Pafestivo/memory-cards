import React, { useState } from "react";
import Card from "./Card";
import flagsObject from "./flagsObject";
import '../styles/main.css'

const Main = () => {

  const [flags, setFlags] = useState(flagsObject)

  const shuffle = () => {
    let shuffledFlags = []
    let usedIndexes = []

    let i = 0
    while(i < flagsObject.length) {
      let randomIndex = Math.floor(Math.random() * flagsObject.length)
      if(!usedIndexes.includes(randomIndex)) {
        shuffledFlags.push(flagsObject[randomIndex])
        usedIndexes.push(randomIndex)
        i++
      }
    }
    setFlags(shuffledFlags)
  }

  return (
    <div className="main">
      <div className="cards-container">
        {flags.map(flag => {
          return <Card src={flag.img} cardName={flag.flagName} onClick={shuffle} key={flag.id}/>
        })}
      </div>
    </div>
  )
}

export default Main