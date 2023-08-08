package com.db.grad.javaapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.db.grad.javaapi.model.BookUsers;
import com.db.grad.javaapi.model.Books;
import com.db.grad.javaapi.model.id.BookUsersId;

@Repository
public interface BookUsersRepository extends JpaRepository<BookUsers,BookUsersId>{
	
	@Query("SELECT bu.books FROM BookUsers bu WHERE bu.user.id = ?1")
	List<Books> findBooksByUserId(int userId);
}
