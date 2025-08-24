package com.journalyst.analytics.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class AnalyticsResponseDto {

    private double winRate; // percentage of profitable trades
    private double profitFactor;
    private double avgReturn;
    private double maxDrawdown;
    private int totalTrades;
    private int winningTrades;
    private int losingTrades;
    private int longestWinStreak;
    private int longestLossStreak;
    private double sharpRatio;
    private double totalProfitLoss;
    private double totalProfitLossPercent;
    private List<TradeDto> recentTrades;
}
