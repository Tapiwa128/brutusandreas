import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">BrutusAndreas</Link>
      </div>
      <ul className="navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === '/services' ? 'active' : ''}>
          <Link to="/services">Services</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
