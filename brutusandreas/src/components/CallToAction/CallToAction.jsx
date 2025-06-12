import React from 'react';
import './CallToAction.css';

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-overlay">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Work With Brutus Andreas?</h2>
          <p className="cta-subtitle">
            Let’s build something incredible together. Contact us today to discuss how we can help your business grow and thrive.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-btn primary">Get in Touch</a>
            <a href="/services" className="cta-btn outline">Explore Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
