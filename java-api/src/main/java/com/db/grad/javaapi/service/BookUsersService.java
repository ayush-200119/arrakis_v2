package com.db.grad.javaapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.BookUsers;
import com.db.grad.javaapi.model.Books;
import com.db.grad.javaapi.model.Users;
import com.db.grad.javaapi.model.id.BookUsersId;
import com.db.grad.javaapi.repository.BookUsersRepository;
import com.db.grad.javaapi.repository.BooksRepository;
import com.db.grad.javaapi.repository.UserRepository;

@Service
public class BookUsersService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private BooksRepository bookRepository;
	
	@Autowired
	 private BookUsersRepository repository;
		
	public List<Books> getBooksByUserId(int userId) throws ResourceNotFoundException{
		List<Books> books = repository.findBooksByUserId(userId);
		if(books.size()==0) {
			throw new ResourceNotFoundException("There are no books for the given user id: "+userId);
		}
		return books;
	}
	
	public BookUsers createBookUsers(int userId,int bookId) throws ResourceNotFoundException{
		Users user = userRepository.findById(userId).
				orElseThrow(() -> new ResourceNotFoundException("Foreign Key Constraint Voilated, user not found with the given id  " + userId));
		Books book = bookRepository.findById(bookId).
				orElseThrow(() -> new ResourceNotFoundException("Foreign Key Constraint Voilated, book not found with the given id  " + bookId));
		
		BookUsersId id = new BookUsersId(bookId,userId);
		BookUsers bookUser = new BookUsers(id,user,book);
		
		return repository.save(bookUser);
	}
}
