package com.db.grad.javaapi.dto.tradeDto;

public class TradeUpdateStatusDto {
	private String reason;

	public TradeUpdateStatusDto() {
		super();
	}

	public TradeUpdateStatusDto(String reason) {
		super();
		this.reason = reason;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}
}
