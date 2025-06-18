import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

function ContactUs() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'your_service_id',     // Replace with your EmailJS service ID
        'your_template_id',    // Replace with your EmailJS template ID
        form.current,
        'your_user_id'         // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset();
        },
        () => {
          alert('Failed to send message, please try again.');
        }
      );
  };

  return (
    <section className="contact-us">
      <div className="contact-container">
        <div className="form-section">
          <h2>Get in Touch</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <select name="subject" required>
              <option value="">Select Service</option>
              <option value="Econet Services">Econet Services</option>
              <option value="Banking Services">Banking Services</option>
              <option value="DSTV Payments">DSTV Payments</option>
              <option value="Logistics">Logistics</option>
              <option value="Doves Funeral Services">Doves Funeral Services.</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="info-section">
          <div className="info-block">
            <h3>Visit Us</h3>
            <p>
              5731 Mkhosana T/Ship,
              <br />
              Victoria Falls, Zimbabwe
            </p>
          </div>
          <div className="info-block">
            <h3>Call Us</h3>
            <p>
              +263 784 891 758
              <br />
              +263 789 684 916
            </p>
          </div>
          <div className="info-block">
            <h3>Email Us</h3>
            <p>
              sales@brutusandreas.co.zw
              <br />
              info@brutusandreas.co.zw
              <br />
              tanaka@brutusandreas.co.zw
              <br />
              tadiwa@brutusandreas.co.zw
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;