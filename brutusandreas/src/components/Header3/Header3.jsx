import React from 'react';
import './Header3.css';
import headerImage from '../../assets/slide1.jpg'; // Use an existing image

function Header3() {
  return (
    <header
      className="page-header"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="header-overlay">
        <h1>Contact</h1>
      </div>
    </header>
  );
}

export default Header3;