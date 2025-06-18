import React from 'react';
import './Dstv.css';

const Dstv = () => {
  return (
    <div className="dstv-container">
      <h2 className="dstv-title">DStv Packages and Prices</h2>
      <table className="dstv-table">
        <thead>
          <tr>
            <th>DStv Package</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Premium</td>
            <td>$79</td>
          </tr>
          <tr>
            <td>Compact Plus</td>
            <td>$50</td>
          </tr>
          <tr>
            <td>Compact</td>
            <td>$36</td>
          </tr>
          <tr>
            <td>Family</td>
            <td>$25</td>
          </tr>
          <tr>
            <td>Access</td>
            <td>$21</td>
          </tr>
          <tr>
            <td>Lite</td>
            <td>$14</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dstv;
