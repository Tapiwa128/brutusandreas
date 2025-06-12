import React from 'react';
import './Header.css';
import headerImage from '../../assets/slide1.jpg'; // Use an existing image

function Header() {
  return (
    <header
      className="page-header"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="header-overlay">
        <h1>About</h1>
      </div>
    </header>
  );
}

export default Header;