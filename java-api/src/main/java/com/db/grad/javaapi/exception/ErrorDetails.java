package com.db.grad.javaapi.exception;
import java.util.Date;

import org.springframework.http.HttpStatus;

import ch.qos.logback.core.status.Status;

public class ErrorDetails {
    private Date timestamp;
    private HttpStatus status;
    private String message;
    private String details;

    public ErrorDetails(Date timestamp, String message, String details,HttpStatus status) {
         super();
         this.timestamp = timestamp;
         this.status=status;
         this.message = message;
         this.details = details;
    }

    public Date getTimestamp() {
         return timestamp;
    }

    public String getMessage() {
         return message;
    }

    public String getDetails() {
         return details;
    }
    
    public HttpStatus getStatus() {
    	return status;
    }
}