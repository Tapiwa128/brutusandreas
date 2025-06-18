import React, { useState } from 'react';
import './WhatsApp.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+263789684916';
  const waLink = `https://wa.me/${phoneNumber.replace('+', '')}`;

  return (
    <div className="whatsapp-widget">
      {isOpen && (
        <div className="whatsapp-box">
          <div className="whatsapp-header">
            <span>💬 Chat with us</span>
            <button onClick={() => setIsOpen(false)}>&times;</button>
          </div>
          <div className="whatsapp-body">
            <p>Hi 👋<br />Need help? We're here for you.</p>
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              Start Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
      <button className="whatsapp-button" onClick={() => setIsOpen(!isOpen)}>
        <FaWhatsapp size={24} />
      </button>
    </div>
  );
};

export default WhatsApp;
