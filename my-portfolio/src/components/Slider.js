//import {useState, useEffect, useRef} from "react";
import Capstone from "../assets/Capstone.jpg"
import Lucky from "../assets/Lucky.jpg"
import Game from "../assets/Game.jpg"

const slides =[
  {
    image: {Capstone},
    title: "Little Lemon",
  },

  {
    image: {Lucky},
    title: "Lucky Shrub",
  },

  {
    image: {Game},
    title: "Rock, Paper, Scissors",
  }
]

function Slider ({slides}) {
  return(
    <div className="slideshow">
      <div className="show-wrapper">
        {slides.map((slides) =>{
          return <div key={index} className="slide-card">
            <img src={image.imgage} alt="" />
            <div className="show-overlay">
              <h2 className="slide-title">{imgage.title}</h2>
            </div>
          </div>;
          
        })}
      </div>
      
    </div>
  );
};

export default Slider;