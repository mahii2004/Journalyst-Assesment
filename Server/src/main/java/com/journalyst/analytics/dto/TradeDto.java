package com.journalyst.analytics.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TradeDto {

    private String tradeId;
    private String symbol;
    private double returnPercent;
    private double profitLoss;
    private String tradeDate;
}
