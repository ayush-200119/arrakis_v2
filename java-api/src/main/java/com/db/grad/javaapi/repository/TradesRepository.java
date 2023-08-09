package com.db.grad.javaapi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.db.grad.javaapi.model.Trades;

@Repository
public interface TradesRepository extends JpaRepository<Trades,Integer>{
	List<Trades> findByBookIdIn(List<Integer> bookIds);
	//List<Trades> findBysecurityIdIn(List<Integer> securityIds);
}
