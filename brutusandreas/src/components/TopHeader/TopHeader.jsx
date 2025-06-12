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
            <h1><span className="brand">Brutus Andreas</span></h1>
            <h2>Innovating Infrastructure, Empowering Progress</h2>
            <p>
              Our vision is to lead the world in sustainable infrastructure, smart energy solutions, 
              and integrated logistics — connecting communities and creating a better tomorrow.
            </p>
            <button className="cta-button">Discover Our Vision</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopHeader;
