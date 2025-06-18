import React, { useState } from 'react';
import './WhatsApp.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+263784891758';

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const messageLink = `https://wa.me/${phoneNumber.replace('+', '')}`;

  return (
    <div className="whatsapp-widget">
      <div className={`whatsapp-box ${isOpen ? 'open' : ''}`}>
        <div className="whatsapp-header">
          <span>Chat with us</span>
          <button onClick={toggleWidget}>×</button>
        </div>
        <div className="whatsapp-body">
          <p>Hello 👋<br />How can we help you?</p>
          <a href={messageLink} target="_blank" rel="noopener noreferrer">
            Start Chat on WhatsApp
          </a>
        </div>
      </div>

      <button className="whatsapp-button" onClick={toggleWidget}>
        <FaWhatsapp size={28} />
      </button>
    </div>
  );
};

export default WhatsApp;
