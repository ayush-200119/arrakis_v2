package com.db.grad.javaapi.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "counter_parties")
public class CounterParties {
	@Id
	private int id;
	private String name;
	
	@OneToMany(mappedBy = "counterParty")
	private List<Trades> trades;
	
	@Column(name = "id",nullable = false)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	@Column(name = "name",nullable = false)
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
