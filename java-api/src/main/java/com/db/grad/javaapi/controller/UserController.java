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

import com.db.grad.javaapi.dto.SecuritiesDto;
import com.db.grad.javaapi.dto.userDto.UserLoginRequestDto;
import com.db.grad.javaapi.exception.ResourceAlreadyExistsException;
import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Securities;
import com.db.grad.javaapi.model.Users;
import com.db.grad.javaapi.service.UsersService;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
public class UserController {
	private UsersService service;
	
	@Autowired
	public UserController(UsersService usersService) {
		this.service = usersService;
	}
	
	@PostMapping("/user")
	public Users createUser(@Valid @RequestBody Users user) throws ResourceAlreadyExistsException
	{
		return service.createUser(user);
	}
	
	@GetMapping("/user/{id}")
	public Users getUserById(@PathVariable(value="id") int id) throws ResourceNotFoundException {
		return service.getUserById(id);
	}
	
	@PostMapping("/user/login")
	public Users loginUser(@RequestBody UserLoginRequestDto request)throws ResourceNotFoundException{
		return service.getUserByEmailAndPassword(request);
	}
	
	@PostMapping("/users")
	public List<Users> createUsers(@RequestBody List<Users> users){
		return service.createUsers(users);
	}
}
