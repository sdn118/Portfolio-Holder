import {useState, useEffect, useRef} from "react";


const colors = [{url: "assets/Capstone.jpg"}, "#00C49F", "#FFBB28", "#FFBB28"]
const delay = 2500;

function Slideshow () {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

function resetTimeout() {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current)
  };
};

useEffect(() => {
  resetTimeout();
  timeoutRef.current = setTimeout(
    () =>
      setIndex((prevIndex) =>
        prevIndex === colors.length - 1 ? 0 : prevIndex + 1),
    delay
  );
    return () =>{
      resetTimeout();
    };
}, [index]);

return (
<div className="slideshow">
  <div className="slider"
    style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
    {colors.map((backgroundColor, index) =>(
      <div className="slide" key={index} style={{backgroundColor}} />
    ))}
  </div>

  <div className="showDots">
    {colors.map((_, idx) => (
      <div key={idx} className={`showDot${index === idx ? "active": ""}`}
      onClick={() => { setIndex(idx);}}/>
    ))}
  </div>
</div>
  )
};


export default Slideshow;