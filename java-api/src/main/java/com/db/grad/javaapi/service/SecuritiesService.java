package com.db.grad.javaapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.grad.javaapi.dto.SecuritiesDto;
import com.db.grad.javaapi.exception.ResourceAlreadyExistsException;
import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Securities;
import com.db.grad.javaapi.repository.SecuritiesRepository;
import java.util.List;
import java.util.Optional;

@Service
public class SecuritiesService {
	
	@Autowired
	private SecuritiesRepository repository;
	
	public List<Securities> getAllSecurities(){
		return repository.findAll();
	}
	
	public Securities saveSecurity(Securities security)throws ResourceAlreadyExistsException {
		Optional<Securities> existingSecurity= repository.findById(security.getId());
		if(existingSecurity.isPresent()) {
			throw new ResourceAlreadyExistsException("Security with the id: "+security.getId()+"already exists");
		}
		
		return repository.save(security);
	}
	
	public Securities getSecurityById(int id)throws ResourceNotFoundException{
		Securities security = repository.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + id));
		return security;
	}
	
	public Securities deleteSecurity(int id)throws ResourceNotFoundException{
		Securities security = repository.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + id));
		repository.delete(security);
		return security;
	}
	
	public Securities updateSecurity(SecuritiesDto request,int id) throws ResourceNotFoundException{
		Securities security = repository.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Security not found for this id :: " + id));
		if(request.getRating() != null){
			security.setRating(request.getRating());
		}
		if(request.getStatus() != null) {
			security.setStatus(request.getStatus());
		}
		repository.save(security);
		return security;
	}
}
