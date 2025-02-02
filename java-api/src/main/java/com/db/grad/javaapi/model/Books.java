package com.db.grad.javaapi.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name = "books")
public class Books {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String bookName;
	
	@OneToMany(mappedBy = "book")
	private List<BookUsers> bookUsers;
	
	@OneToMany(mappedBy = "book")
	private List<Trades> trades;
	
	@Id
    @Column(name = "id", nullable = false)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	@Column(name = "bookName", nullable = false)
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	} 	
}