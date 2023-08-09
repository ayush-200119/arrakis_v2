package com.db.grad.javaapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.grad.javaapi.exception.ResourceAlreadyExistsException;
import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Books;
import com.db.grad.javaapi.model.CounterParties;
import com.db.grad.javaapi.repository.CounterPartyRepository;

@Service
public class CounterPartyService {

	@Autowired
	private CounterPartyRepository repository;
	
	public CounterParties createCounterParty(CounterParties Cp)throws ResourceAlreadyExistsException {
		Optional<CounterParties> existingCp= repository.findById(Cp.getId());
		if(existingCp.isPresent()) {
			throw new ResourceAlreadyExistsException("Counter Party with the id: "+Cp.getId()+" already exists");
		}
		return repository.save(Cp);
	}
	
	public CounterParties getCpById(int id)throws ResourceNotFoundException{
		CounterParties Cp = repository.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Counter Party not found for this id :: " + id));
		return Cp;
	}
	
	public List<CounterParties> createCounterParties(List<CounterParties> cp) {
		return repository.saveAll(cp);
	}
}
