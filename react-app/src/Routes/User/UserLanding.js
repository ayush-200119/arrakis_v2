import { default as React, useState } from 'react';
import AuthService from '../../services/auth.service';
import '../../App.css'

const tradesData = [
  { id: 1, bookId: 'B001', quantity: 100, status: 'Active', price: 105, buyOrSell: 'Buy', tradeDate: '2023-08-10', settlementDate: '2023-08-12', counterparty: 'Counterparty A', issuer: 'Issuer X', maturity: '2025-12-31' },
  { id: 2, bookId: 'B002', quantity: 50, status: 'Pending', price: 98, buyOrSell: 'Sell', tradeDate: '2023-08-09', settlementDate: '2023-08-13', counterparty: 'Counterparty B', issuer: 'Issuer Y', maturity: '2026-03-15' },
  // Add more trades
];

const UserLanding = () => {
const user = AuthService.getCurrentUser();
console.log("user is : " , user)
const [bonds, setBonds] = useState(tradesData);
const [selectedType, setSelectedType] = useState('all');
+++
const handleTypeChange = (event) => {
  const type = event.target.value;
  setSelectedType(type);

  if (type === 'all') {
    setBonds(tradesData);
  } else {
    const filteredBonds = tradesData.filter(bond => bond.name.toLowerCase().includes(type));
    setBonds(filteredBonds);
  }}

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
      </div>


    </div>
    );


};

  



export default UserLanding;