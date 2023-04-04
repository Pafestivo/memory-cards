import React from "react";
import Card from "./Card";
import canada from "../images/canada.jpg";
import france from "../images/france.jpg";
import germany from "../images/germany.jpg";
import israel from "../images/israel.jpg";
import italy from "../images/italy.jpg";
import mexico from "../images/mexico.jpg";
import russia from "../images/russia.jpg";
import usa from "../images/usa.jpg";
import '../styles/main.css'

const Main = () => {
  return (
    <div className="main">
      <div className="cards-container">
        <Card src={canada} cardName="Flag of Canada"/>
        <Card src={france} cardName="Flag of France"/>
        <Card src={germany} cardName="Flag of Germany"/>
        <Card src={israel} cardName="Flag of Israel"/>
        <Card src={italy} cardName="Flag of Italy"/>
        <Card src={mexico} cardName="Flag of Mexico"/>
        <Card src={russia} cardName="Flag of Russia"/>
        <Card src={usa} cardName="Flag of U.S.A"/>
      </div>
    </div>
  )
}

export default Main