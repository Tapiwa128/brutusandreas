import React from 'react';
import './Header2.css';
import headerImage from '../../assets/slide1.jpg'; // Use an existing image

function Header2() {
  return (
    <header
      className="page-header"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="header-overlay">
        <h1>Products and Pricing</h1>
      </div>
    </header>
  );
}

export default Header2;