import React from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* About Section */}
        <div className="footer-section about">
          <h2>Brutus Andreas</h2>
          <p>
            A leader in telecom, banking, logistics and insurance solutions.
            We pride ourselves on innovation, sustainability and community impact.
          </p>
        </div>

        {/* Services Section */}
        <div className="footer-section links">
          <h3>Services</h3>
          <ul>
            <li>Econet Services</li>
            <li>Banking Services</li>
            <li>DSTV Payments</li>
            <li>Logistics</li>
            <li>Doves Funeral Services</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social">
          <h3>Connect with Us</h3>
          <div className="social-icons">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaFacebookF /></a>       
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h3>Join Our Newsletter</h3>
          <p>Stay updated with our latest services and offers.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Brutus Andreas. All Rights Reserved. <br />
          Website developed by <a href="https://www.pakamatech.co.zw" target="_blank" rel="noreferrer">Pakama Tech Solutions</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
