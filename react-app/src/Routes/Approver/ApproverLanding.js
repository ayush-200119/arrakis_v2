import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const tradesDatas = [
  { id: 1, bookId: 'B001', quantity: 100, status: 'Active', price: 105, buyOrSell: 'Buy', user: 'User 1',tradeDate: '2023-08-10', settlementDate: '2023-08-12', counterparty: 'Counterparty A', issuer: 'Issuer X', maturity: '2025-12-31' },
  { id: 2, bookId: 'B002', quantity: 50, status: 'Pending', price: 98, buyOrSell: 'Sell', user: 'User 2',tradeDate: '2023-08-09', settlementDate: '2023-08-13', counterparty: 'Counterparty B', issuer: 'Issuer Y', maturity: '2026-03-15' },
  { id: 3, bookId: 'B003', quantity: 150, status: 'Pending', price: 498, buyOrSell: 'Sell',user: 'User 2', tradeDate: '2023-08-10', settlementDate: '2023-08-14', counterparty: 'Counterparty C', issuer: 'Issuer Z', maturity: '2024-03-15' },
  // Add more trades
];

const ApproverLanding = () => {
  const [tradesData,setTradesData] = useState([tradesDatas]);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['All','Managed by User 1', 'Managed by User 2'];
 
  const [trades,setTrades] = useState(tradesDatas);


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
    else if(selectedOption === 'Managed by User 1'){
      var filter = tradesDatas.filter((d)=>d.user === 'User 1')
      setTrades(filter)
    }
    else if(selectedOption=='Managed by User 2'){
      var filter=tradesDatas.filter((d)=>d.user === 'User 2')
      setTrades(filter)
    }
      
  },[selectedOption])

  

  return (
    <div className="dashboard">
      <h1>Trade Management Dashboard</h1>
      <select
        value={selectedOption}
        onChange={(e) => handleOptionChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button onClick={handleSortClick}>Sort By Maturity Date</button>

      <table className="trade-table">
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Price</th>
            <th>Buy/Sell</th>
            <th>User</th>
            <th>Trade Date</th>
            <th>Settlement Date</th>
            <th>Counterparty</th>
            <th>Issuer</th>
            <th>Maturity</th>
          </tr>
        </thead>
        <tbody>
          {trades.map(trade => (
            <tr key={trade.bookId}>
              <td><Link to={`/approver/trade/${trade.bookId}`}>{trade.bookId}</Link></td>
              <td>{trade.quantity}</td>
              <td>{trade.status}</td>
              <td>{trade.price}</td>
              <td>{trade.buyOrSell}</td>
              <td>{trade.user}</td>
              <td>{trade.tradeDate}</td>
              <td>{trade.settlementDate}</td>
              <td>{trade.counterparty}</td>
              <td>{trade.issuer}</td>
              <td>{trade.maturity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

  

export default ApproverLanding