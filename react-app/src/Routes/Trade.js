import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import './Trade.css';
import UserService from "./../services/user.service"
import { error } from 'jquery';

const Trade = ()=>{

    const [reason, setReason] = useState("");
    const location = useLocation();
    const { someData } = location.state;
    console.log(someData);
    function getCurrentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        
        return `${year}-${month}-${day}`;
      }

    const handleSubmitReason = (e)=>{
        e.preventDefault();
        //calling 
        UserService.updateTradeReason(reason,someData.id).then(
            (res)=>{
                console.log("Reason updated successfully");
            }).catch((err)=>{
                console.log("Error: ",err);
            })
    }

    const handleChange = (e)=>{
        setReason(e.target.value);
    }
    
    var currDate = getCurrentDate();
    return(
        <div className="trade-card">
      <h1>Trade Details</h1>
      <br></br>
      <div className="trade-header">
        <strong>Book Name:</strong> {someData.book.bookName}
      </div>
      <div className="trade-header">
        <strong>ISIN Number:</strong> {someData.security.isin}
      </div>
      <div className="trade-header">
        <strong>CUSIP Number:</strong> {someData.security.cusip}
      </div>
      <div className="trade-header">
        <strong>Issuer:</strong> {someData.security.issuer}
      </div>
      <div className="trade-header">
        <strong>Counter Party:</strong> {someData.counterParty.name}
      </div>
      <div className="trade-header trade-status">
        <strong>Maturity Date:</strong> {someData.security.maturityDate}
      </div>
      <div className="trade-header">
        <strong>Coupon:</strong> {someData.security.coupon}
      </div>
      <div className="trade-header trade-status">
        <strong>Face Value:</strong> {someData.security.faceValue}
      </div>
      <div className="trade-header">
        <strong>Type:</strong> {someData.security.type}
      </div>
      <div className="trade-header">
        <strong>Quantity:</strong> {someData.quantity}
      </div>
      <div className="trade-header">
        <strong>Buy/Sell:</strong> {someData.buy_sell}
      </div>
      <div className="trade-date trade-header">
        <strong>Trade Date:</strong> {someData.tradeDate}
      </div>
      <div className="trade-date trade-header">
        <strong>Settlement Date:</strong> {someData.settlementDate}
      </div>
        <br></br>
        <br></br>
        {someData.reason!=null && <div className="trade-header">
        <strong>Reason:</strong> {someData.reason}
      </div>}
        <br></br>
        <br></br>
        {currDate>someData.security.maturityDate && <><h2>This Bonds has been matured and not settled, provide the reason in the area below:</h2>
        <form onSubmit={handleSubmitReason}>
            <textarea id="reason" name="reason" rows="6" cols="50" value={reason} onChange={handleChange}></textarea>
            <button type='submit'>Add reason</button>
        </form>
        </>}

    </div>
    )
}   

export default Trade