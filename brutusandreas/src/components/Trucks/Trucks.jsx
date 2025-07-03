import React from 'react';
import './Trucks.css';

const Trucks = () => {
  return (
    <div className="trucks-container">
      <h2 className="trucks-title">Side Tipper Truck Services</h2>
      <p className="trucks-subtitle">Reliable logistics from Hwange, Zimbabwe to South Africa</p>

      <table className="trucks-table">
        <thead>
          <tr>
            <th>Truck Type</th>
            <th>Route</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Side Tipper Trucks</td>
            <td></td>
            <td> Zimbabwe → South Africa</td>
            <td className="available">Available</td>
          </tr>
        </tbody>
      </table>

      <div className="trucks-note">
        <p>We offer dependable transport services for bulk materials across Southern Africa.</p>
      </div>
    </div>
  );
};

export default Trucks;
