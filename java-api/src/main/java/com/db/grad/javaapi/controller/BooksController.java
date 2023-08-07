package com.db.grad.javaapi.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.db.grad.javaapi.exception.ResourceAlreadyExistsException;
import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Books;
import com.db.grad.javaapi.service.BooksService;
import java.util.List;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
public class BooksController {
	
	private BooksService service;
	public BooksController(BooksService service) {
		this.service=service;
	}
	
	@GetMapping("/books")
	public List<Books> getAllBooks(){
		return service.getAllBooks();
	}
	
	@PostMapping("/book")
	public Books createBook(@Valid @RequestBody Books book) throws ResourceAlreadyExistsException
	{
		return service.saveBook(book);
	}
	
	@GetMapping("/book/{id}")
	public Books getBookById(@PathVariable(value="id") int id) throws ResourceNotFoundException {
		return service.getBookById(id);
	}
	
	
	

}
