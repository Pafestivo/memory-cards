import React, { useState } from "react";
import Card from "./Card";
import flagsObject from "./flagsObject";
import '../styles/main.css'

const Main = () => {

  const [flags, setFlags] = useState(flagsObject)

  const handleClick = (e) => {
    // eslint-disable-next-line
    const clickedFlag = flags.find(flag => flag.id == e.target.id)
    // if the flag isn't clicked
    if(!clickedFlag.clicked) {
      // mark as clicked
      clickedFlag.clicked = true
      // then check if all flags are clicked
      let allFlagsClicked = flags.every(flag => flag.clicked)
      if(allFlagsClicked) {
        resetGame()
        console.log('you win')
        return
      }
      // if flag is already clicked
    } else {
      resetGame()
      console.log('game over')
    }
    shuffle()
  }

  const resetGame = () => {
    // reset all flags
    flags.forEach(flag => {
      flag.clicked = false
    })
  }

  const shuffle = () => {
    let shuffledFlags = []
    let usedIndexes = []

    let i = 0
    while(i < flags.length) {
      let randomIndex = Math.floor(Math.random() * flags.length)
      if(!usedIndexes.includes(randomIndex)) {
        shuffledFlags.push(flags[randomIndex])
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
          return <Card src={flag.img} cardName={flag.flagName} onClick={handleClick} id={flag.id} key={flag.id}/>
        })}
      </div>
    </div>
  )
}

export default Main