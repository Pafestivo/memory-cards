import React, { useEffect, useState } from "react";
import Card from "./Card";
import flagsObject from "./flagsObject";
import '../styles/main.css'

const Main = () => {

  const [flags, setFlags] = useState(flagsObject)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  // make sure the images loaded before rendering the page
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = flags.map(flag => new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = () => reject(new Error(`Failed to load image ${flag.img}`))
      img.src = flag.img
    }))

    Promise.all(images)
      .then(() => setImagesLoaded(true))
      .catch(console.error)
  })


  const handleClick = (e) => {
    // eslint-disable-next-line
    const clickedFlag = flags.find(flag => flag.id == e.target.id)
    // if the flag isn't clicked
    if(!clickedFlag.clicked) {
      // mark as clicked and update score
      clickedFlag.clicked = true
      setScore(score + 1)
      // then check if all flags are clicked
      let allFlagsClicked = flags.every(flag => flag.clicked)
      if(allFlagsClicked) {
        resetGame(true)
        alert('You win')
        return
      }
      // if flag is already clicked
    } else {
      resetGame()
    }
    shuffle()
  }

  const resetGame = (isWon) => {
    if(isWon) setBestScore(8)
    else if(score > bestScore) setBestScore(score)
    // reset all flags
    flags.forEach(flag => {
      flag.clicked = false
    })
    // set score to 0
    setScore(0)
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
      <div className="scores">
        <h2>Score: {score}</h2>
        <h2>Best Score: {bestScore}</h2>
      </div>
      {imagesLoaded ? (
        <div className="cards-container">
        {flags.map(flag => {
          return <Card src={flag.img} cardName={flag.flagName} onClick={handleClick} id={flag.id} key={flag.id}/>
        })}
      </div>
      ) : (
        <h1 className="loading">Game Loading...</h1>
      )} 
      
      <div className="rules">
        <h1>How to play</h1>
        <h3>
          You may only click on each flag once.<br/>
          After each click, the cards will shuffle, and you have to remember what you've already clicked.<br/>
          Clicking the same card twice will reset your score.<br/>
          Reach a score of 8 to win.
        </h3>
      </div>
    </div>
  )
}

export default Main