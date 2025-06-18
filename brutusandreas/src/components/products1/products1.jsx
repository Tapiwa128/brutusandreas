import React from 'react';
import './Products1.css';

const Products1 = () => {
  return (
    <div className="products1-container">
      <h2 className="products1-title">Doves Funeral Cover</h2>

      <div className="table-wrapper">
        <h3>Table 1: Funeral Cover and Grocery (USD200)</h3>
        <table className="products1-table">
          <thead>
            <tr>
              <th>Casket Type</th>
              <th>Family (USD)</th>
              <th>Single Life/Dependant (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Traditional - Flat Lid Casket</td>
              <td>$5.00 ✅</td>
              <td>$4.00</td>
            </tr>
            <tr>
              <td>Classical - 3 Tier Casket</td>
              <td>$7.00</td>
              <td>$5.00</td>
            </tr>
            <tr>
              <td>Executive - Dome Casket</td>
              <td>$11.00</td>
              <td>$7.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-wrapper">
        <h3>Table 2: Basic Cover, Grocery (USD200) and Bus</h3>
        <table className="products1-table">
          <thead>
            <tr>
              <th>Casket Type</th>
              <th>Family (USD)</th>
              <th>Single Life (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Traditional - Flat Lid Casket</td>
              <td>$14.00</td>
              <td>$8.00</td>
            </tr>
            <tr>
              <td>Classical - 3 Tier Casket</td>
              <td>$15.00</td>
              <td>$9.00</td>
            </tr>
            <tr>
              <td>Executive - Dome Casket</td>
              <td>$19.00</td>
              <td>$11.00</td>
            </tr>
          </tbody>
        </table>
        <p className="note">*Dependants will have no bus option at new business</p>
      </div>
    </div>
  );
};

export default Products1;
