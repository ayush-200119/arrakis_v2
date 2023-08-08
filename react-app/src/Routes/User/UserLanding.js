<<<<<<< HEAD
import { default as React, useState } from 'react';
import AuthService from '../../services/auth.service';
import '../../App.css'
=======
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'D:/arrakis_v2/react-app/src/App.css';
>>>>>>> da1afc24c3a4311cf78a4f7cc01feecabc3c28f2

const tradesData = [
  { id: 1, bookId: 'B001', quantity: 100, status: 'Active', price: 105, buyOrSell: 'Buy', tradeDate: '2023-08-10', settlementDate: '2023-08-12', counterparty: 'Counterparty A', issuer: 'Issuer X', maturity: '2025-12-31' },
  { id: 2, bookId: 'B002', quantity: 50, status: 'Pending', price: 98, buyOrSell: 'Sell', tradeDate: '2023-08-09', settlementDate: '2023-08-13', counterparty: 'Counterparty B', issuer: 'Issuer Y', maturity: '2026-03-15' },
  // Add more trades
];

const UserLanding = () => {
<<<<<<< HEAD
const user = AuthService.getCurrentUser();
console.log("user is : " , user)
const [bonds, setBonds] = useState(bondsData);
const [selectedType, setSelectedType] = useState('all');

const handleTypeChange = (event) => {
  const type = event.target.value;
  setSelectedType(type);

  if (type === 'all') {
    setBonds(bondsData);
  } else {
    const filteredBonds = bondsData.filter(bond => bond.name.toLowerCase().includes(type));
    setBonds(filteredBonds);
  }
};

return (
  <div className="bond-container">
    <h1>Securities</h1>
    <div className="filter-container">
      <label>Filter by Type:</label>
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="all">All</option>
        <option value="government">Government</option>
        <option value="corporate">Corporate</option>
        <option value="municipal">Municipal</option>
      </select>
=======

  const [trades] = useState(tradesData);

  return (
    <div className="dashboard">
      <h1>Trade Management Dashboard</h1>
      <table className="trade-table">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Price</th>
            <th>Buy/Sell</th>
            <th>Trade Date</th>
            <th>Settlement Date</th>
            <th>Counterparty</th>
            <th>Issuer</th>
            <th>Maturity</th>
          </tr>
        </thead>
        <tbody>
          {trades.map(trade => (
            <tr key={trade.id}>
              <td><Link to={`/SecurityCard/${trade.id}`}>{trade.bookId}</Link></td>
              <td>{trade.quantity}</td>
              <td>{trade.status}</td>
              <td>{trade.price}</td>
              <td>{trade.buyOrSell}</td>
              <td>{trade.tradeDate}</td>
              <td>{trade.settlementDate}</td>
              <td>{trade.counterparty}</td>
              <td>{trade.issuer}</td>
              <td>{trade.maturity}</td>
            </tr>
          ))}
        </tbody>
      </table>
>>>>>>> da1afc24c3a4311cf78a4f7cc01feecabc3c28f2
    </div>
  );
};

  



export default UserLanding