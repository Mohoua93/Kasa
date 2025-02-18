import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  const nextSlide = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % pictures.length);

  return (
    <div className="slider">
      <button
        className="left-arrow"
        onClick={prevSlide}
        aria-label="Image précédente"
        disabled={pictures.length <= 1}
      >
        <svg
          width="96"
          height="120"
          viewBox="0 0 96 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70.0399 15.7831L62.9199 8.70312L23.3599 48.3031L62.9599 87.9031L70.0399 80.8231L37.5199 48.3031L70.0399 15.7831Z"
            fill="white"
          />
        </svg>
      </button>
      <div className="slide">
        <img
          className="slide-img"
          src={pictures[currentIndex]}
          alt={`Vue ${currentIndex + 1}`}
          loading="lazy"
        />
      </div>
      <button
        className="right-arrow"
        onClick={nextSlide}
        aria-label="Image suivante"
        disabled={pictures.length <= 1}
      >
        <svg
          width="96"
          height="121"
          viewBox="0 0 96 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
