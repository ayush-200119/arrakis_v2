import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../services/user.service'
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.service'


const tradesDatas = [
  // { id: 1, bookId: 'B001', quantity: 100, status: 'Active', price: 105, buyOrSell: 'Buy', user: 'User 1',tradeDate: '2023-08-10', settlementDate: '2023-08-12', counterparty: 'Counterparty A', issuer: 'Issuer X', maturity: '2025-12-31' },
  // { id: 2, bookId: 'B002', quantity: 50, status: 'Pending', price: 98, buyOrSell: 'Sell', user: 'User 2',tradeDate: '2023-08-09', settlementDate: '2023-08-13', counterparty: 'Counterparty B', issuer: 'Issuer Y', maturity: '2026-03-15' },
  // { id: 3, bookId: 'B003', quantity: 150, status: 'Pending', price: 498, buyOrSell: 'Sell',user: 'User 2', tradeDate: '2023-08-10', settlementDate: '2023-08-14', counterparty: 'Counterparty C', issuer: 'Issuer Z', maturity: '2024-03-15' },
  // Add more trades
];

const user = AuthService.getCurrentUser();
const ApproverLanding = () => {
  const [tradesData,setTradesData] = useState([tradesDatas]);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['All','Managed by User 1', 'Managed by User 2'];
 
  const [trades,setTrades] = useState(tradesDatas);
  const navigate = useNavigate();

  useEffect (()=>{
    // console.log(user.id);
          UserService.getAllTrades()
        .then((res)=>{
          console.log(res.data);
          setTrades([...res.data])
        })
        .catch((err)=>{
          console.log("Error")
        })
    
    
  },[])

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    
  };

  const handleSortClick=()=>{
    console.log("sortinggg")
    
    
    const sorted = [...trades].sort((a, b) => {
    const valueA = new Date(a.security.maturityDate);
    console.log(valueA);
    const valueB = new Date(b.security.maturityDate);
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

  function getCurrentDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  }

  const handleDefaultBonds=()=>{
    
    const defaultTrades = trades.filter((trade)=>{
        var currentDate = getCurrentDate();
        return currentDate>trade.security.maturityDate;
    });      
    console.log(defaultTrades);
    setTrades(defaultTrades);
  };

  const handleAllBonds=()=>{
    UserService.getAllTrades()
        .then((res)=>{
          console.log(res.data);
          setTrades([...res.data])
        })
        .catch((err)=>{
          console.log("Error")
        })
    };

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
      
      <Link to={"/user/addtrade"}>
            <button>AddTrade</button>
      </Link>

      <button onClick={handleSortClick}>Sort By Maturity Date</button>
      <button onClick={handleDefaultBonds}>View Default Bonds</button>
      <button onClick={handleAllBonds}>View All Bonds</button>

      <table className="trade-table">
      <thead>
          <tr>
            <th>Isin</th>
            <th>Issuer</th>
            <th>Counter Party</th>
            <th>Maturity Date</th>
            <th>Coupon(%)</th>
            <th>Face Value</th>
            <th>Type</th>
            <th>Book Name</th>
            <th>Quantity</th>
            <th>Buy/Sell</th>
            <th>Trade Date
            (yyyy-mm-dd)</th>
            <th>Settlement Date
            (yyyy-mm-dd)</th>
            <th>View More Details</th>
          </tr>
        </thead>
        <tbody>
          {trades.map(trade => (
            <tr key={trade.id}>
              {/* <td><Link to={`/user/trade/${trade.bookId}`}>{trade.bookId}</Link></td> */}
              <td>{trade.security.isin}</td>
              <td>{trade.security.issuer}</td>
              <td>{trade.counterParty.name}</td>
              <td>{trade.security.maturityDate}</td>
              <td>{trade.security.coupon}</td>
              <td>{trade.security.faceValue}</td>
              <td>{trade.security.type}</td>
              <td>{trade.book.bookName}</td>
              <td>{trade.quantity}</td>
              <td>{trade.buy_sell}</td>
              <td>{trade.tradeDate}</td>
              <td>{trade.settlementDate}</td>
              {/* <td><Link to={`/user/trade/${trade.id}`}>View More</Link></td> */}
              <td><button onClick={() => navigate('/approver/trade', { state: { someData: trade} })}>
                    View Details
                  </button>
              </td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

  

export default ApproverLanding