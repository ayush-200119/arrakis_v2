package com.db.grad.javaapi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR)
public class ResourceAlreadyExistsException extends Exception {
	
    private static final long serialVersionUID = 1L;
    
	public ResourceAlreadyExistsException(String message){
        super(message);
    }
}
