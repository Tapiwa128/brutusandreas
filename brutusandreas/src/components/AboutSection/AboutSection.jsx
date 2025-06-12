import React from 'react';
import './AboutSection.css';
import logo from '../../assets/logo.png'; // Update path if needed

const AboutSection = () => {
  return (
    <section className="about-bg">
      <div className="about-overlay">
        <div className="about-container">
          <div className="about-logo">
            <img src={logo} alt="Brutus Andreas Logo" />
          </div>
          <div className="about-content">
            <h1>Welcome to <span>Brutus Andreas</span></h1>
            <p className="intro">
              We are a forward-thinking company dedicated to transforming the future.
            </p>
            <p className="mission">
              Our mission is to deliver <strong>innovative, sustainable</strong>, and <strong>customer-centric</strong> solutions that connect communities, drive economic growth, and enhance lives.
            </p>
            <ul className="values">
              <li>🚀 Safety & Reliability</li>
              <li>💡 Innovation & Sustainability</li>
              <li>🤝 Collaboration & Partnership</li>
              <li>🧭 Integrity & Accountability</li>
              <li>🎯 Customer-Centricity</li>
            </ul>
            <p className="history">
              Founded with a vision to create a diversified company, <strong>Brutus Andreas</strong> makes a lasting impact on the environment, economy, and society.
            </p>
            <a href="/contact" className="cta-button">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
