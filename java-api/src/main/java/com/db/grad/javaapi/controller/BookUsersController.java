package com.db.grad.javaapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.db.grad.javaapi.dto.bookuserDto.BookUserCreateRequestDto;
import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.BookUsers;
import com.db.grad.javaapi.model.Books;
import com.db.grad.javaapi.model.Users;
import com.db.grad.javaapi.service.BookUsersService;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
public class BookUsersController {
	
	@Autowired
	private BookUsersService service;

	public BookUsersController(BookUsersService service) {
		this.service = service;
	}
	
	@GetMapping("/books/user/{id}")
	public List<Books> getBooksForUserId(@PathVariable(value="id") int id)throws ResourceNotFoundException{
		return service.getBooksByUserId(id);
	}
	
	@PostMapping("/books/user")
	public BookUsers createBookUser(@RequestBody BookUserCreateRequestDto request) throws ResourceNotFoundException {
		return service.createBookUsers(request.getUserId(),request.getBookId());
	}
	
	@PostMapping("/bookusers")
	public List<BookUsers> createBookUsers(@RequestBody List<BookUserCreateRequestDto> bookUsers)throws ResourceNotFoundException{
		return service.createBookUsers(bookUsers);
	}
}
