package com.db.grad.javaapi.model;

import java.sql.Date;

import javax.annotation.Generated;
import javax.management.loading.PrivateClassLoader;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "securities")
public class Securities {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String isin;
	private String cusip;
	private String issuer;
	private Date maturityDate;
	private double coupon;
	private String type;
	private double faceValue;
	private String status;
	private String rating;
	
	//constructors
	public Securities(){
		
	}
	
	@Column(name = "rating",nullable = true)
	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public Securities(int id, String isin, String cusip,String issuer, Date maturityDate, double coupon, String type,
			double faceValue, String status,String rating) {
		this.id = id;
		this.isin = isin;
		this.cusip = cusip;
		this.issuer = issuer;
		this.maturityDate = maturityDate;
		this.coupon = coupon;
		this.type = type;
		this.faceValue = faceValue;
		this.status = status;
		this.rating=rating;
	}

	//getters and setters
	@Id
    @Column(name = "id", nullable = false)
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	@Column(name = "isin",nullable = false)
	public String getIsin() {
		return isin;
	}

	public void setIsin(String isin) {
		this.isin = isin;
	}

	@Column(name= "cusip", nullable = false)
	public String getCusip() {
		return cusip;
	}

	public void setCusip(String cusip) {
		this.cusip = cusip;
	}

	@Column(name = "issuer", nullable = false)
	public String getIssuer() {
		return issuer;
	}

	public void setIssuer(String issuer) {
		this.issuer = issuer;
	}
	
	@Column(name="maturity_date", nullable = false)
	public Date getMaturityDate() {
		return maturityDate;
	}

	public void setMaturityDate(Date maturityDate) {
		this.maturityDate = maturityDate;
	}
	
	@Column(name = "coupon",nullable = false)
	public double getCoupon() {
		return coupon;
	}

	public void setCoupon(double coupon) {
		this.coupon = coupon;
	}
	
	@Column(name = "type", nullable = false)
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	@Column(name = "face_value",nullable = false)
	public double getFaceValue() {
		return faceValue;
	}

	public void setFaceValue(double faceValue) {
		this.faceValue = faceValue;
	}
	
	@Column(name = "status",nullable = true)
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
}
