import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const images = [
  '//au.koala.com/cdn/shop/files/Web_HPHeroBanner_ProductName_Desktop_19dbc2f9-7246-42ee-9869-077ececc19fa.jpg?v=1748587340&width=3840',
  '//au.koala.com/cdn/shop/files/Web_HPHeroBanner_ProductName_Desktop.jpg?v=1748587300&width=3840',
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="hero-slider">
        <div
          className="slider-background"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>

        <div className="slider-controls">
          <button className="prev" onClick={handlePrev}>
            &#10094;
          </button>
          <button className="next" onClick={handleNext}>
            &#10095;
          </button>
        </div>

        <div className="slider-badges">
          <span className="discount">10% Off</span>
        </div>
      </div>

      <div className="features-section">
        <span>🚚 Fast delivery</span>
        <span>🛏️ 120-night trial</span>
        <span>🛡️ World-class warranty</span>
      </div>
    </>
  );
};

export default HeroSlider;
