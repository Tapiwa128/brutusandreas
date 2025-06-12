import React, { useState, useEffect } from 'react';
import './TopHeader.css';

const images = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
];

const TopHeader = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="topheader">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="overlay">
            <h1>Welcome to <span className="highlight">Brutus Andreas</span></h1>
            <p>
              Our vision is to be a global leader in sustainable infrastructure development,
              energy solutions, and logistics, empowering progress and connecting communities
              for a better future.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopHeader;
