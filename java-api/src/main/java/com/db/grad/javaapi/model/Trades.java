package com.db.grad.javaapi.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity
@Table(name = "trades")
public class Trades {
	
	@Id
	private int id;
	private int securityId;
	private int counterPartyId;
	private int bookId;
	
	public int getSecurityId() {
		return securityId;
	}
	public void setSecurityId(int securityId) {
		this.securityId = securityId;
	}
	public int getCounterPartyId() {
		return counterPartyId;
	}
	public void setCounterPartyId(int counterPartyId) {
		this.counterPartyId = counterPartyId;
	}
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public Books getBook() {
		return book;
	}
	public void setBook(Books book) {
		this.book = book;
	}
	@ManyToOne
	@MapsId("bookId")
	@JoinColumn(name="bookId")
	private Books book;
	
	@ManyToOne
	@MapsId("counterPartyId")
	@JoinColumn(name="counterPartyId")
	private CounterParties counterParty;
	
	@ManyToOne
	@MapsId("securityId")
	@JoinColumn(name="securityId")
	private Securities security;
	
	private int quantity;
	private String status;
	private double price;
	private String buy_sell;
	private Date tradeDate;
	private Date settlementDate;
	private String reason;
	
	@Column(name = "reason" , nullable = true)
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public Trades() {
		super();
	}
	
	
	
	public Trades(int id, int securityId, int counterPartyId, int bookId, Books book, CounterParties counterParty,
			Securities security, int quantity, String status, double price, String buy_sell, Date tradeDate,
			Date settlementDate, String reason) {
		super();
		this.id = id;
		this.securityId = securityId;
		this.counterPartyId = counterPartyId;
		this.bookId = bookId;
		this.book = book;
		this.counterParty = counterParty;
		this.security = security;
		this.quantity = quantity;
		this.status = status;
		this.price = price;
		this.buy_sell = buy_sell;
		this.tradeDate = tradeDate;
		this.settlementDate = settlementDate;
		this.reason = reason;
	}
	@Column(name = "id" , nullable = false)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	@Column(name = "book" , nullable = false)
	public Books getBooks() {
		return book;
	}
	public void setBooks(Books books) {
		this.book = books;
	}
	
	@Column(name = "counterParty" , nullable = false)
	public CounterParties getCounterParty() {
		return counterParty;
	}
	public void setCounterParty(CounterParties counterParty) {
		this.counterParty = counterParty;
	}
	
	@Column(name = "security" , nullable = false)
	public Securities getSecurity() {
		return security;
	}
	public void setSecurity(Securities security) {
		this.security = security;
	}
	
	@Column(name = "quantity" , nullable = false)
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	@Column(name = "status" , nullable = false)
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	@Column(name = "price" , nullable = false)
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	@Column(name = "buy_sell" , nullable = false)
	public String getBuy_sell() {
		return buy_sell;
	}
	public void setBuy_sell(String buy_sell) {
		this.buy_sell = buy_sell;
	}
	
	@Column(name = "trade_date" , nullable = false)
	public Date getTradeDate() {
		return tradeDate;
	}
	public void setTradeDate(Date tradeDate) {
		this.tradeDate = tradeDate;
	}
	
	@Column(name = "settlement_date" , nullable = false)
	public Date getSettlementDate() {
		return settlementDate;
	}
	public void setSettlementDate(Date settlementDate) {
		this.settlementDate = settlementDate;
	}
}
