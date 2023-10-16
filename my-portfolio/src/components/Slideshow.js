import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Capstone from "../assets/Capstone.jpg";
import Lucky from "../assets/Lucky.jpg";
import Game from "../assets/Game.jpg";

const slideshow = ({images}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
}

function Slideshow () {
  const images = [
    Capstone,
    Lucky,
    Game,
  ];




return (
  <div className="image-slider">
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Slider>
  </div>
);
};

export default Slideshow;