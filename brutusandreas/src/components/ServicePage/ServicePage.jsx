import React, { useEffect, useState } from 'react';
import './ServicePage.css';
import { FaMobileAlt, FaMoneyCheckAlt, FaHeart, FaTruck } from 'react-icons/fa';

function ServicePage() {
  const services = [
    {
      icon: <FaMobileAlt />,
      title: 'Econet Services',
      items: ['Ecocash Cash In and Cash Out', 'Buddie Airtime', 'Sim Cards'],
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: 'Bank Services',
      items: ['Accredited ZB BANK Agent', 'ZESA Payment', 'DSTV Payment'],
    },
    {
      icon: <FaHeart />,
      title: 'Insurance Services',
      items: ['Doves Funeral Policies'],
    },
    {
      icon: <FaTruck />,
      title: 'Logistics',
      items: ['End-to-end Solutions', 'Inventory Management', 'Distribution'],
    },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200); // slight delay for entrance
  }, []);

  return (
    <section className="servicepage">
      <h1 className="servicepage-title">Our Core Services</h1>
      <div className={`service-grid ${animate ? 'animate' : ''}`}>
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-box">{service.icon}</div>
            <h2>{service.title}</h2>
            <ul>
              {service.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicePage;
