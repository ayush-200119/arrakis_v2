// AddTradeForm.js
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../../services/user.service'
import User from './User';
import AuthService from '../../services/auth.service'

const user = AuthService.getCurrentUser();
console.log(user);
const AddTrade = () => {

  const navigate = useNavigate();
    const [trade, setTrade] = useState({
        id: '',
        bookId: '',
        counterPartyId: '',
        securityId: '',
        quantity: '',
        status: '',
        price: '',
        buy_sell: 'buy',
        tradeDate: '',
        settlementDate: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name,value);
        setTrade((prevTrade) => ({
          ...prevTrade,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        trade.id = Math.floor(Math.random() * 11 * 1000);
        console.log(trade);
        //Add logic to save trade data to a database or perform other actions
        UserService.createTrade(trade).then(
          (res)=>{
            console.log("Inserted Successfully");
            navigate('/approver');

          }).catch((err)=>{
            console.log("Error while inserting",err);
          })
      };
    
      return (
        <div className="add-trade-form">
          <h2>Add Trade</h2>
          <form onSubmit={handleSubmit}>
            <label>Book ID</label>
            <input type="text" name="bookId" value={trade.bookId} required onChange={handleInputChange} />
    
            <label>Counterparty ID</label>
            <input type="text" name="counterPartyId" value={trade.counterPartyId} onChange={handleInputChange} required />
    
            <label>Security ID</label>
            <input type="text" name="securityId" value={trade.securityId} onChange={handleInputChange} required/>
    
            <label>Quantity</label>
            <input type="number" name="quantity" value={trade.quantity} onChange={handleInputChange} required />
    
            <label>Status</label>
            <input type="text" name="status" value={trade.status} onChange={handleInputChange} required />
    
            <label>Price</label>
            <input type="number" name="price" value={trade.price} onChange={handleInputChange} required />
    
            <label>Buy/Sell</label>
            <select name="buy_sell" value={trade.buySell} onChange={handleInputChange}>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
    
            <label>Trade Date</label>
            <input type="date" name="tradeDate" value={trade.tradeDate} onChange={handleInputChange} required/>
    
            <label>Settlement Date</label>
            <input type="date" name="settlementDate" value={trade.settlementDate} onChange={handleInputChange} required/>
    
            <button type="submit">Add Trade</button>
          </form>
        </div>
      );
    };
  

export default AddTrade;
