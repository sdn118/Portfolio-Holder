import {useState, useEffect} from "react";
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

function Slider ({ slides }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null

  useEffect(()=> {
    timeOut =
    autoPlay && 
    setTimeout(()=>{}, 2500) 
  })
  return(
    <div className="slideshow"
    onMouseEnter={()=>{
      setAutoPlay(false);
      clearTimeout(timeOut)
    }}
    onMouseLeave={()=>{
      setAutoPlay(true);
    }}>
      <div className="show-wrapper">
        {slides.map((image, index) =>{
          return <div 
            key={index} 
            className=
            {index === current ? "slide-card slide-card-active"
               : "slide-card"}>
            <img src={image.image} alt="" />
            <div className="show-overlay">
              <h2 className="slide-title">{image.title}</h2>
            </div>
          </div>;
          
        })};

        <div className="slide-dots">
          {slides.map((_, index) => {
            return <div
            key={index} 
            className={
              index === current ? "slide-dots slide-dots-active"
               : "slide-dots"}
               onClick={() => setCurrent(index)}>

            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;