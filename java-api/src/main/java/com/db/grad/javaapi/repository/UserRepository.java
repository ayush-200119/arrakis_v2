package com.db.grad.javaapi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.db.grad.javaapi.model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users,Integer>{
	Optional<Users> findByEmail(String email);
}
