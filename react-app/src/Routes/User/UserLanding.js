import { default as React, useEffect, useState } from 'react';
import '../../App.css';
import AuthService from '../../services/auth.service';

const tradesDatas = [
  { id: 1, bookId: 'B001', quantity: 100, status: 'Active', price: 105, buyOrSell: 'Buy', tradeDate: '2023-08-10', settlementDate: '2023-08-12', counterparty: 'Counterparty A', issuer: 'Issuer X', maturity: '2025-12-31' },
  { id: 2, bookId: 'B002', quantity: 50, status: 'Pending', price: 98, buyOrSell: 'Sell', tradeDate: '2023-08-09', settlementDate: '2023-08-13', counterparty: 'Counterparty B', issuer: 'Issuer Y', maturity: '2026-03-15' },
  { id: 3, bookId: 'B003', quantity: 150, status: 'Pending', price: 498, buyOrSell: 'Sell', tradeDate: '2023-08-10', settlementDate: '2023-08-14', counterparty: 'Counterparty C', issuer: 'Issuer Z', maturity: '2024-03-15' },
  // Add more trades
];

const UserLanding = () => {
const user = AuthService.getCurrentUser();
console.log("user is : " , user)
const [bonds, setBonds] = useState(tradesData);
const [selectedType, setSelectedType] = useState('all');


  const handleOptionChange = (option) => {
    setSelectedOption(option);
    
  };

  const handleSortClick=()=>{
    console.log("sortinggg")
    
    
    const sorted = [...trades].sort((a, b) => {
    const valueA = new Date(a.maturity);
    console.log(valueA);
    const valueB = new Date(b.maturity);
   
      return valueA-valueB;
   
  });
  setTrades(sorted);
  console.log(sorted)
  }
  useEffect(()=>{console.log("hello")},[trades]);
  useEffect(()=>{
    // console.log("helloinside useEffect")
     if(selectedOption=='All'){
       setTrades(tradesDatas)
     }
     else if(selectedOption === "Active Status"){
      var filter = tradesDatas.filter((d)=>d.status === 'Active')
      setTrades(filter)
    }
    else if(selectedOption=='Pending Status'){
      var filter=tradesDatas.filter((d)=>d.status === 'Pending')
      setTrades(filter)
    }
      
  },[selectedOption])

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

  



export default UserLanding