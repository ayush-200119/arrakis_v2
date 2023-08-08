// AddTradeForm.js
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';


const AddTrade = () => {
    const [trade, setTrade] = useState({
        id: '',
        bookId: '',
        counterpartyId: '',
        securityId: '',
        quantity: '',
        status: '',
        price: '',
        buySell: '',
        tradeDate: '',
        settlementDate: '',
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTrade((prevTrade) => ({
          ...prevTrade,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(trade);
        // Add logic to save trade data to a database or perform other actions
      };
    
      return (
        <div className="add-trade-form">
          <h2>Add Trade</h2>
          <form onSubmit={handleSubmit}>
            <label>ID</label>
            <input type="text" name="id" value={trade.id} onChange={handleInputChange} />
    
            <label>Book ID</label>
            <input type="text" name="bookId" value={trade.bookId} onChange={handleInputChange} />
    
            <label>Counterparty ID</label>
            <input type="text" name="counterpartyId" value={trade.counterpartyId} onChange={handleInputChange} />
    
            <label>Security ID</label>
            <input type="text" name="securityId" value={trade.securityId} onChange={handleInputChange} />
    
            <label>Quantity</label>
            <input type="number" name="quantity" value={trade.quantity} onChange={handleInputChange} />
    
            <label>Status</label>
            <input type="text" name="status" value={trade.status} onChange={handleInputChange} />
    
            <label>Price</label>
            <input type="number" name="price" value={trade.price} onChange={handleInputChange} />
    
            <label>Buy/Sell</label>
            <select name="buySell" value={trade.buySell} onChange={handleInputChange}>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
    
            <label>Trade Date</label>
            <input type="date" name="tradeDate" value={trade.tradeDate} onChange={handleInputChange} />
    
            <label>Settlement Date</label>
            <input type="date" name="settlementDate" value={trade.settlementDate} onChange={handleInputChange} />
    
            <button type="submit">Add Trade</button>
          </form>
        </div>
      );
    };
  

export default AddTrade;
