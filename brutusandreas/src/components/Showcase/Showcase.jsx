import React from 'react';
import './Showcase.css';

import zb from '../../assets/zb.png';
import zetdc from '../../assets/zetdc.png';
import doves from '../../assets/doves.png';
import dstv from '../../assets/dstv.png';
import econet from '../../assets/econet.png';
import pakama from '../../assets/pakama.png';

function Showcase() {
  const partners = [
    { name: 'ZB Bank', logo: zb },
    { name: 'ZETDC', logo: zetdc },
    { name: 'Doves Funeral Services', logo: doves },
    { name: 'DSTV', logo: dstv },
    { name: 'Econet', logo: econet },
    { name: 'Pakama Tech Solutions', logo: pakama },
  ];

  return (
    <section className="showcase">
      <h2 className="showcase-title">Our Trusted Partners</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.logo} alt={partner.name} />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Showcase;