import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Adjust path
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Brutus Andreas" />
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li className={location.pathname === '/services' ? 'active' : ''}>
            <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          </li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
