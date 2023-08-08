package com.db.grad.javaapi.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.db.grad.javaapi.dto.bookuserDto.BookUserCreateRequestDto;
import com.db.grad.javaapi.dto.tradeDto.TradeCreateDto;
import com.db.grad.javaapi.dto.tradeDto.TradeUpdateStatusDto;
import com.db.grad.javaapi.exception.ResourceNotFoundException;
import com.db.grad.javaapi.model.BookUsers;
import com.db.grad.javaapi.model.Books;
import com.db.grad.javaapi.model.CounterParties;
import com.db.grad.javaapi.model.Securities;
import com.db.grad.javaapi.model.Trades;
import com.db.grad.javaapi.repository.BookUsersRepository;
import com.db.grad.javaapi.repository.BooksRepository;
import com.db.grad.javaapi.repository.CounterPartyRepository;
import com.db.grad.javaapi.repository.SecuritiesRepository;
import com.db.grad.javaapi.repository.TradesRepository;

@Service
public class TradeService {
	
	@Autowired
	private TradesRepository repository;
	
	@Autowired
	 private BooksRepository booksRepository;
	
	@Autowired
	 private SecuritiesRepository securitiesRepository;
	
	@Autowired
	 private CounterPartyRepository counterPartiesRepository;
	
	@Autowired
	 private BookUsersRepository bookUserRepository;
	
	public List<Trades> getAllTrades(){
		return repository.findAll();
	}
	
	public List<Trades> getTradesForUser(int userId){
		List<Books> booksOfUser = bookUserRepository.findBooksByUserId(userId);
		List<Integer> bookIds=new ArrayList<>();
		
		for(int i=0;i<booksOfUser.size();i++) {
			bookIds.add(booksOfUser.get(i).getId());
		}
		return repository.findByBookIdIn(bookIds);
	}
	
	public Trades updateTrade (TradeUpdateStatusDto request,int tradeId) throws ResourceNotFoundException{
		Trades trade = repository.findById(tradeId).
				orElseThrow(() -> new ResourceNotFoundException("Trade not found for this id :: " + tradeId));
		trade.setStatus(request.getStatus());
		repository.save(trade);
		return trade;
	}
	
	public Trades createTrades (TradeCreateDto request) throws ResourceNotFoundException{
		
		
		
		Books book = booksRepository.findById(request.getBookId()).
				orElseThrow(() -> new ResourceNotFoundException("Foreign Key Constraint Voilated, book not found with the given id  " + request.getBookId()));
		System.out.println(book.getId());
		
		CounterParties counterParty= counterPartiesRepository.findById(request.getCounterPartyId()).
				orElseThrow(() -> new ResourceNotFoundException("Foreign Key Constraint Voilated, counter party not found with the given id  " + request.getCounterPartyId()));
		
		Securities security = securitiesRepository.findById(request.getSecurityId()).
				orElseThrow(() -> new ResourceNotFoundException("Foreign Key Constraint Voilated, security not found with the given id  " + request.getSecurityId()));
		
		Trades trade = new Trades(request.getId(), request.getSecurityId(), request.getCounterPartyId(), request.getBookId(),
				book, counterParty, security, request.getQuantity(), request.getStatus(), request.getPrice(), request.getBuy_sell(), 
				request.getTradeDate(), request.getSettlementDate());
		return repository.save(trade);
	}
	
	public List<Trades> createMultipleTrades(List<TradeCreateDto> request) throws ResourceNotFoundException{
		
		List<Trades> trades = new ArrayList<>();
		for(TradeCreateDto curr:request)
		{
		Books book = booksRepository.findById(curr.getBookId()).
				orElseThrow(() -> new ResourceNotFoundException("Foreign Key Constraint Voilated, book not found with the given id  " + curr.getBookId()));
		System.out.println(book.getId());
		
		CounterParties counterParty= counterPartiesRepository.findById(curr.getCounterPartyId()).
				orElseThrow(() -> new ResourceNotFoundException("Foreign Key Constraint Voilated, counter party not found with the given id  " + curr.getCounterPartyId()));
		
		Securities security = securitiesRepository.findById(curr.getSecurityId()).
				orElseThrow(() -> new ResourceNotFoundException("Foreign Key Constraint Voilated, security not found with the given id  " + curr.getSecurityId()));
		
		Trades trade = new Trades(curr.getId(), curr.getSecurityId(), curr.getCounterPartyId(), curr.getBookId(),
				book, counterParty, security, curr.getQuantity(), curr.getStatus(), curr.getPrice(), curr.getBuy_sell(), 
				curr.getTradeDate(), curr.getSettlementDate());
		
		trades.add(trade);
		}
		
		return repository.saveAll(trades);
	}
	
}
