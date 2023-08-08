package com.db.grad.javaapi.model;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

import com.db.grad.javaapi.model.id.BookUsersId;

@Entity
@Table(name = "book_users")
public class BookUsers {
	@EmbeddedId
	private BookUsersId id;
	
	@ManyToOne
	@MapsId("userId")
	@JoinColumn(name="user_id")
	private Users user;
	
	@ManyToOne
	@MapsId("bookId")
	@JoinColumn(name="book_id")
	private Books books;

	public BookUsers() {
	}

	public BookUsers(BookUsersId id, Users user, Books books) {
		super();
		this.id = id;
		this.user = user;
		this.books = books;
	}

	public BookUsersId getId() {
		return id;
	}

	public void setId(BookUsersId id) {
		this.id = id;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public Books getBooks() {
		return books;
	}

	public void setBooks(Books books) {
		this.books = books;
	}
	
}	
