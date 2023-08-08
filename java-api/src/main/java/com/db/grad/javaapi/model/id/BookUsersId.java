package com.db.grad.javaapi.model.id;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Embeddable;

@Embeddable
public class BookUsersId implements Serializable{
	private int userId;
	private int bookId;
	
	public BookUsersId() {
	}
	public BookUsersId(int bookId, int userId) {
		super();
		this.bookId = bookId;
		this.userId = userId;
	}
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		
        if (o == null || getClass() != o.getClass()) return false;
        
        BookUsersId that = (BookUsersId) o;
        return Objects.equals(bookId, that.bookId) &&
               Objects.equals(userId, that.userId);	
	}
	
	@Override
    public int hashCode() {
        return Objects.hash(bookId, userId);
    }
}
