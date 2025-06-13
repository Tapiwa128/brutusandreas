import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <div className="contactus-form-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <select required>
            <option value="">Select a Service</option>
            <option value="econet">Econet Services</option>
            <option value="banking">Banking Services</option>
            <option value="dstv">DSTV Payments</option>
            <option value="logistics">Logistics</option>
            <option value="insurance">Doves Funeral Services</option>
          </select>
          <textarea placeholder="Your Message..." rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contactus-info-section">
        <h3>Visit Us</h3>
        <p>731 Mkhosana T/Ship,<br />Victoria Falls, Zimbabwe</p>

        <h3>Call Us</h3>
        <p>+263 784 891 758<br />+263 789 684 916</p>

        <h3>Email Us</h3>
        <p>
          <a href="mailto:sales@brutusandreas.co.zw">sales@brutusandreas.co.zw</a><br />
          <a href="mailto:info@brutusandreas.co.zw">info@brutusandreas.co.zw</a><br />
          <a href="mailto:tanaka@brutusandreas.co.zw">tanaka@brutusandreas.co.zw</a><br />
          <a href="mailto:tadiwa@brutusandreas.co.zw">tadiwa@brutusandreas.co.zw</a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
