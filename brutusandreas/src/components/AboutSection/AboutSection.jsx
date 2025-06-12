import React from 'react';
import './AboutSection.css';
import logo from '../../assets/logo.png'; // Adjust this path based on your project structure

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-logo">
          <img src={logo} alt="Brutus Andreas Logo" />
        </div>
        <div className="about-content">
          <h2>About Brutus Andreas</h2>
          <p className="mission">
            At <strong>Brutus Andreas</strong>, our mission is to deliver <strong>innovative</strong>, <strong>sustainable</strong>, and <strong>customer-centric</strong> solutions that connect communities, drive economic growth, and enhance the quality of life.
          </p>
          <p>
            We strive to be a <strong>trusted partner</strong>, a <strong>responsible corporate citizen</strong>, and a <strong>leader</strong> in our industries—dedicated to excellence, safety, and integrity.
          </p>

          <h3>Our Core Values</h3>
          <ul className="values-list">
            <li>✅ Safety and Reliability</li>
            <li>✅ Customer-Centricity</li>
            <li>✅ Innovation and Sustainability</li>
            <li>✅ Integrity and Accountability</li>
            <li>✅ Collaboration and Partnership</li>
          </ul>

          <p className="history">
            <strong>Brutus Andreas</strong> was founded with a vision to create a diversified company that makes a positive impact on the environment, economy, and society.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
