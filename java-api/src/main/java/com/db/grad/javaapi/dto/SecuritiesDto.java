package com.db.grad.javaapi.dto;

import javax.annotation.Nullable;

public class SecuritiesDto{
	@Nullable
	private String status;
	
	@Nullable
	private String rating;
	
	public SecuritiesDto() {
	}
	
	public SecuritiesDto(String status, String rating) {
		super();
		this.status = status;
		this.rating = rating;
	}
	
//	@Nullable
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
//	@Nullable
	public String getRating() {
		return rating;
	}
	public void setRating(String rating) {
		this.rating = rating;
	}
}
