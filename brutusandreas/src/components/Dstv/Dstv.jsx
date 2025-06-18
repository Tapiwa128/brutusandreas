import React from "react";
import './Dstv.css';


const Dstv = () => {
  return (
    <div className="dstv-container">
      <h1 className="dstv-header">DSTV Services</h1>
      <p className="dstv-description">
        We offer a range of DSTV services including installation, repairs, and
        subscription management. Our team is dedicated to providing you with the
        best entertainment experience.
      </p>
      <div className="dstv-services">
        <h2>Our Services</h2>
        <ul>
          <li>Installation of DSTV dishes and decoders</li>
          <li>Repairs and maintenance</li>
          <li>Subscription management</li>
          <li>Customer support</li>
        </ul>
      </div>
    </div>
  );
};          

export default Dstv;