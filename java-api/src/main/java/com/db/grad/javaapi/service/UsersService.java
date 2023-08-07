package com.db.grad.javaapi.service;

import java.util.Optional;

import org.h2.command.ddl.CreateUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.db.grad.javaapi.dto.userDto.UserLoginRequestDto;
import com.db.grad.javaapi.exception.ResourceAlreadyExistsException;
import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Securities;
import com.db.grad.javaapi.model.Users;
import com.db.grad.javaapi.repository.UserRepository;

@Service
public class UsersService {
	
	@Autowired
    private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserRepository repository;
	
	public Users createUser(Users user)throws ResourceAlreadyExistsException {
		Optional<Users> existingUser= repository.findById(user.getId());
		if(existingUser.isPresent()) {
			throw new ResourceAlreadyExistsException("User with the id: "+user.getId()+" already exists");
		}
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return repository.save(user);
	}
	
	public Users getUserById(int id)throws ResourceNotFoundException{
		Users user = repository.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("User not found for this id :: " + id));
		return user;
	}

	public Users getUserByEmailAndPassword(UserLoginRequestDto requestDto)throws ResourceNotFoundException{
		Users user = repository.findByEmail(requestDto.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("User not found for the given email"));
		
		if(passwordEncoder.matches(requestDto.getPassword(), user.getPassword()))
			return user;
		throw new ResourceNotFoundException("Password incorrect");
	}
}
