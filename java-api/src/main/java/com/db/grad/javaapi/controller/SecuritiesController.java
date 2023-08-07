package com.db.grad.javaapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import com.db.grad.javaapi.dto.SecuritiesDto;
import com.db.grad.javaapi.exception.ResourceAlreadyExistsException;
import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Securities;
import com.db.grad.javaapi.service.SecuritiesService;
import java.util.List;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
public class SecuritiesController {
	private SecuritiesService service;
	
	@Autowired
	public SecuritiesController(SecuritiesService service) {
		this.service=service;
	}
	
	@GetMapping("/securities")
	public List<Securities> getAllSecurities(){
		return service.getAllSecurities();
	}
	
	@PostMapping("/security")
	public Securities createSecurity(@Valid @RequestBody Securities security) throws ResourceAlreadyExistsException
	{
		return service.saveSecurity(security);
	}
	
	@GetMapping("/security/{id}")
	public Securities getSecurityById(@PathVariable(value="id") int id) throws ResourceNotFoundException {
		return service.getSecurityById(id);
	}
	
	@DeleteMapping("/security/{id}")
	public Securities deleteSecurityById(@PathVariable(value="id") int id) throws ResourceNotFoundException {
		return service.deleteSecurity(id);
	}
	
	@PatchMapping("/security/{id}")
	public Securities updateSecurity(@PathVariable(value="id") int id,@RequestBody SecuritiesDto updatedSecurity) 
	throws ResourceNotFoundException{
		return service.updateSecurity(updatedSecurity, id);
	}
}
