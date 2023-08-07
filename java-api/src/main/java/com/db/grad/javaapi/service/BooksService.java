package com.db.grad.javaapi.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.grad.javaapi.exception.ResourceAlreadyExistsException;
import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Books;
import com.db.grad.javaapi.repository.BooksRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BooksService {
	
	@Autowired
	private BooksRepository repository;
	
	public List<Books> getAllBooks(){
		return repository.findAll();
	}
	
	public Books getBookById(int id)throws ResourceNotFoundException{
		Books book = repository.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Book not found for this id :: " + id));
		return book;
	}
	
	public Books saveBook(Books book)throws ResourceAlreadyExistsException {
		Optional<Books> existingBook= repository.findById(book.getId());
		if(existingBook.isPresent()) {
			throw new ResourceAlreadyExistsException("Book with the id: "+book.getId()+"already exists");
		}
		
		return repository.save(book);
	}
}
