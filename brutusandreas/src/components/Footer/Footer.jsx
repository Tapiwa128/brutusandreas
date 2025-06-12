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
      <div className="footer-container">

        <div className="footer-about">
          <h3>About Brutus Andreas</h3>
          <p>
            We are committed to delivering innovative and sustainable solutions in logistics,
            banking, telecom, and funeral services. Partner with us for excellence and integrity.
          </p>
        </div>

        <div className="footer-services">
          <h3>Our Services</h3>
          <ul>
            <li>Econet Services</li>
            <li>Banking Services</li>
            <li>DSTV Payments</li>
            <li>Logistics</li>
            <li>Doves Funeral Services</li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Connect with Us</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://wa.me/263782981579" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Website developed by <a href="https://www.pakamatech.co.zw" target="_blank" rel="noreferrer">Pakama Tech Solutions</a></p>
      </div>
    </footer>
  );
}

export default Footer;
