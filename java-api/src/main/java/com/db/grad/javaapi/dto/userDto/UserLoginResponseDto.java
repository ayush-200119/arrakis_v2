package com.db.grad.javaapi.dto.userDto;

public class UserLoginResponseDto {
	private int id;
	private int bool;
	
	public UserLoginResponseDto() {
	}
	
	public UserLoginResponseDto(int id, int bool) {
		super();
		this.id = id;
		this.bool = bool;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getBool() {
		return bool;
	}
	public void setBool(int bool) {
		this.bool = bool;
	}
}
