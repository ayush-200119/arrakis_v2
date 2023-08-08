package com.db.grad.javaapi.dto.tradeDto;

import java.sql.Date;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;

import com.db.grad.javaapi.model.Books;
import com.db.grad.javaapi.model.CounterParties;
import com.db.grad.javaapi.model.Securities;

public class TradeCreateDto {
	private int id;
	private int bookId;
	private int counterPartyId;
	private int securityId;
	private int quantity;
	private String status;
	private double price;
	private String buy_sell;
	private Date tradeDate;
	private Date settlementDate;
	
	public TradeCreateDto() {
	}
	public TradeCreateDto(int id, int bookId, int counterPartyId, int securityId, int quantity, String status,
			double price, String buy_sell, Date tradeDate, Date settlementDate) {
		this.id = id;
		this.bookId = bookId;
		this.counterPartyId = counterPartyId;
		this.securityId = securityId;
		this.quantity = quantity;
		this.status = status;
		this.price = price;
		this.buy_sell = buy_sell;
		this.tradeDate = tradeDate;
		this.settlementDate = settlementDate;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public int getCounterPartyId() {
		return counterPartyId;
	}
	public void setCounterPartyId(int counterPartyId) {
		this.counterPartyId = counterPartyId;
	}
	public int getSecurityId() {
		return securityId;
	}
	public void setSecurityId(int securityId) {
		this.securityId = securityId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getBuy_sell() {
		return buy_sell;
	}
	public void setBuy_sell(String buy_sell) {
		this.buy_sell = buy_sell;
	}
	public Date getTradeDate() {
		return tradeDate;
	}
	public void setTradeDate(Date tradeDate) {
		this.tradeDate = tradeDate;
	}
	public Date getSettlementDate() {
		return settlementDate;
	}
	public void setSettlementDate(Date settlementDate) {
		this.settlementDate = settlementDate;
	} 
	
	
}
