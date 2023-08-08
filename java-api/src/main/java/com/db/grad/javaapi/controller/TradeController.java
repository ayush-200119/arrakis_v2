package com.db.grad.javaapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.db.grad.javaapi.dto.tradeDto.TradeCreateDto;
import com.db.grad.javaapi.dto.tradeDto.TradeUpdateStatusDto;
import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.Trades;
import com.db.grad.javaapi.service.TradeService;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"})
public class TradeController {
	
	@Autowired
	private TradeService service;

	public TradeController(TradeService service) {
		super();
		this.service = service;
	}
	
	@GetMapping("/trades")
	public List<Trades> getAllTrades(){
		return service.getAllTrades();
	}
	
	@GetMapping("/trades/user/{id}")
	public List<Trades> getTradesForUser(@PathVariable(value="id") int id) throws ResourceNotFoundException{
		return service.getTradesForUser(id);
	}
	
	@PatchMapping("/trade/{id}")
	public Trades updateTradeStatus(@PathVariable(value="id") int id,@RequestBody TradeUpdateStatusDto request)throws ResourceNotFoundException {
		return service.updateTrade(request, id);
	}
	
	@PostMapping("/trade")
	public Trades createTrade(@RequestBody TradeCreateDto request)throws ResourceNotFoundException{
		System.out.println(request.getBookId());
		return service.createTrades(request);
	}
}
