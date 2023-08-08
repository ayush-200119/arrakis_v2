package com.db.grad.javaapi.dto.bookuserDto;

public class BookUserCreateRequestDto {
	private int userId;
	private int bookId;
	
	public BookUserCreateRequestDto() {
	}
	public BookUserCreateRequestDto(int userId, int bookId) {
		this.userId = userId;
		this.bookId = bookId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
}
