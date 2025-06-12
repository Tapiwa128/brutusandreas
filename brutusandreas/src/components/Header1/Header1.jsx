import React from 'react';
import './Header1.css';
import headerImage from '../../assets/slide1.jpg'; // Use an existing image

function Header1() {
  return (
    <header
      className="page-header"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="header-overlay">
        <h1>Services</h1>
      </div>
    </header>
  );
}

export default Header1;