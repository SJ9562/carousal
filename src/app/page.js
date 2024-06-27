"use client"

import React, { useState } from 'react';
import { images } from './courselData.js';
import './coursel.css'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex ===0? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length- 1? 0 : prevIndex +1));
  };

  return (
    <div className="carousel">

      {/* <div className="carousel-title">
        <h2>With Indicators</h2>
        <p> You can attach the indicators to the carousel,lengthwise the controls, too.</p>
      </div> */}

      <div className="carousel-container">

        <button className="carousel-button" onClick={handlePrevious}> &#11164; </button>

        <img className="carousel-image" src={images[currentIndex]} />
        
        <button className="carousel-button" onClick={handleNext}> &#11166; </button>
      </div>
      
      
    </div>

   
  );
};

export default Carousel;
