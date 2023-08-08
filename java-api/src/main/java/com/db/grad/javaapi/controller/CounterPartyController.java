package com.db.grad.javaapi.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.db.grad.javaapi.exception.ResourceAlreadyExistsException;
import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Books;
import com.db.grad.javaapi.model.CounterParties;
import com.db.grad.javaapi.service.CounterPartyService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
public class CounterPartyController {
	private CounterPartyService service;
	
	@Autowired
	public CounterPartyController(CounterPartyService CpService) {
		this.service = CpService;
	}
	
	@PostMapping("/counterparty")
	public CounterParties createCounterParty(@Valid @RequestBody CounterParties Cp) throws ResourceAlreadyExistsException
	{
		return service.createCounterParty(Cp);
	}
	
	@GetMapping("/counterparty/{id}")
	public CounterParties getCounterPartyById(@PathVariable(value="id") int id) throws ResourceNotFoundException {
		return service.getCpById(id);
	}
	
	@PostMapping("/counterparties")
	public List<CounterParties> createBooks(@RequestBody List<CounterParties> cp){
		return service.createCounterParties(cp);
	}
}
