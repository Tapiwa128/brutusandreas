import React from 'react';
import './AboutSection.css';
import logo from '../../assets/logo.png'; // adjust path as needed

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShieldAlt,
  faUserFriends,
  faLightbulb,
  faBalanceScale,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';

function AboutSection() {
  return (
    <div className="about-wrapper">
      <div className="about-card">
        <div className="about-left">
          <img src={logo} alt="Company Logo" className="about-logo" />
        </div>
        <div className="about-right">
          <h1>
            About <span>Brutus Andreas</span>
          </h1>
          <p className="about-intro">
            At Brutus Andreas, our mission is to deliver innovative, sustainable, and customer-centric
            solutions that connect communities, drive economic growth, and enhance the quality of life.
            We strive to be a trusted partner, a responsible corporate citizen, and a leader in our
            industries, dedicated to excellence, safety, and integrity.
          </p>

          <ul className="about-values">
            <li><FontAwesomeIcon icon={faShieldAlt} /> &nbsp;Safety and Reliability</li>
            <li><FontAwesomeIcon icon={faUserFriends} /> &nbsp;Customer-Centricity</li>
            <li><FontAwesomeIcon icon={faLightbulb} /> &nbsp;Innovation and Sustainability</li>
            <li><FontAwesomeIcon icon={faBalanceScale} /> &nbsp;Integrity and Accountability</li>
            <li><FontAwesomeIcon icon={faHandshake} /> &nbsp;Collaboration and Partnership</li>
          </ul>

          <p className="about-history">
            Brutus Andreas was founded with a vision to create a diversified company that makes a positive impact on the environment, economy, and society.
          </p>

          <a href="/contact" className="about-cta">Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
