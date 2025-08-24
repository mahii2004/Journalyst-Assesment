package com.journalyst.analytics.controller;

import com.journalyst.analytics.dto.AnalyticsResponseDto;
import com.journalyst.analytics.dto.TradeDto;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class AnalyticsController {

    double round2(double value){
        return Math.round(value * 100)/100.0;
    }

    @GetMapping("/analytics")
    public AnalyticsResponseDto getAnalytics(){
        Random random = new Random();

        double winRate =round2(50 + random.nextDouble() * 30) ;
        double profitFactor =round2(1.0 + random.nextDouble() * 2) ;
        double avgReturn = round2(-1 + random.nextDouble() * 5);
        double maxDrawdown =round2( 5 + random.nextDouble() * 15);
        int totalTrades = 100 + random.nextInt(200);
        int winningTrades = (int) (totalTrades * (winRate/100));
        int losingTrades = totalTrades-winningTrades;
        int longestWinStreak = 3 + random.nextInt(10);
        int longestLossStreak = 2 + random.nextInt(6);
        double sharpRatio = round2(0.5 + random.nextDouble() * 1.5);
        double totalProfitLoss = round2(-500 + random.nextDouble() * 3000);
        double totalProfitLossPercent=round2( -5 + random.nextDouble() * 15);

        List<TradeDto> recentTrades = new ArrayList<>();
        String [] symbols = {"AAPL", "MSFT","TSLA","AMZN","NVDA","GOOG","META","NFLX"};
        for (int i=0;i<10;i++){
            String tradeId = "T-" + (100-i);
            String symbol = symbols[random.nextInt(symbols.length)];
            double returnPercent = round2(-2 + random.nextDouble() * 4);
            double profitLoss = round2(returnPercent/100 * 1000); // assume trade size 1000
            String date = "2025-08-" + (22-i);
            recentTrades.add(new TradeDto(tradeId,symbol,returnPercent,profitLoss,date));
        }
        return new AnalyticsResponseDto(
          winRate,
          profitFactor,
          avgReturn,
          maxDrawdown,
          totalTrades,
          winningTrades,
          losingTrades,
          longestWinStreak,
          longestLossStreak,
          sharpRatio,
          totalProfitLoss,
          totalProfitLossPercent,
           recentTrades
        );
    }
}
