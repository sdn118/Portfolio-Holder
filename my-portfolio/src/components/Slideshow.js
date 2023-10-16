import {useState, useEffect, useRef} from "react";
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
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => 
      setIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1),
        delay);
      
      return () => {
        resetTimeout();
      }
  }, [index]);

  return (
    <div className="slideshow">
      <div className="slider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)`}}>
        {slides.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{backgroundColor}}
            ></div>
        ))}
      </div>

      <div className="showDots">
        {slides.map((_, idx) => (
          <div
          key={idx}
          className={`showDot${index === idx ? "active" : ""}`}
          onClick={() => {
            setIndex(idx);
          }}
          ></div>
        ))}
      </div>
    </div>
  );
}


export default Slideshow;