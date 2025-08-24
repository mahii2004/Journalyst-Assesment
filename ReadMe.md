# Journalyst-Assesment

# Journalyst Mini Analytics Dashboard

## Overview
A standalone, responsive React dashboard displaying trading performance metrics, recent trades, and a Profit/Loss chart. Metrics are fetched from a Spring Boot backend API. This component is designed as a core widget for Journalyst’s trading analytics platform.

---

## Features
- **Metric Cards**: Win Rate, Profit Factor, Avg Return, Max Drawdown, Sharpe Ratio, Total Trades, Winning/Losing Trades, Longest Streaks, Total P/L.
- **Recent Trades Table**: Displays the last 10 trades with symbol, return %, P/L, and date.
- **Profit/Loss Chart**: Line chart visualizing cumulative P/L over recent trades.
- **Responsive Design**: CSS grid layout adapts to different screen sizes.
- **Dynamic Data**: Metrics are fetched from backend and rendered dynamically.

---

## Folder Structure

- /client
- │
- ├─ /components
- │ ├─ MetrixCard
- │ ├─ TradesTable 
- │ └─ AnalyticsChart
- │
- ├─ /services
- │ └─ api.js
- ├─ Dashboard.js 
- └─ Dashboard.css 


---

## Setup Instructions

### Backend (Spring Boot)
1. Open the `/server` folder in your IDE.
2. Run the Spring Boot application.
3. The API will be available at `http://localhost:8080/analytics`.

### Frontend (React)
1. Open a terminal in the `/client` folder.
2. Install dependencies:
   Start the development server:

### npm start


Open http://localhost:3000 in your browser.


### API Integration

- Endpoint: GET /analytics

- Response: JSON object containing all metrics and recent trades.

- The frontend fetches this data using Axios (getAnalyticsData) and renders metrics, table, and chart dynamically.

## Screenshots
### Dashboard Metrics

### Recent Trades Table

### Profit/Loss Chart

## Notes

- Components are modular and reusable.

- Backend provides randomized analytics for demo purposes.

- CSS ensures responsive layout for desktops and mobile devices.

- Chart visualization uses Recharts.

#  Analytics Dashboard Backend (Spring Boot)

This is a lightweight backend service for the **Mini Analytics Dashboard Component** assessment.  
It provides mock analytics data via a REST API that the frontend dashboard consumes.

---

##  Features
- Single endpoint: `/analytics`
- Returns mock trading analytics metrics and recent trades in JSON format
- CORS enabled for `http://localhost:5173` (React frontend)
- Simple and lightweight, no database used

---

##  Tech Stack
- Java 17+
- Spring Boot 3+
- Maven (or Gradle)

---

##  Project Structure
- src/main/java/com/journalyst/analytics
- ├── controller
- │ └── AnalyticsController.java
- ├── dto
- │ ├── AnalyticsResponseDto.java
- │ └── TradeDto.java



---

##  API Endpoint
| Method | Endpoint      | Description                     |
|--------|--------------|---------------------------------|
| GET    | `/analytics` | Returns mock analytics metrics |

---

###  Sample Response
```json
{
  "winRate": 65.5,
  "profitFactor": 1.8,
  "averageReturn": 2.4,
  "maxDrawdown": 12.0,
  "totalTrades": 50,
  "winningTrades": 30,
  "losingTrades": 20,
  "longestWinStreak": 5,
  "longestLossStreak": 3,
  "sharpeRatio": 1.2,
  "totalProfitLoss": 350.0,
  "totalProfitLossPercent": 8.5,
  "recentTrades": [
    {
      "tradeId": "T1",
      "symbol": "AAPL",
      "returnPercent": 3.2,
      "profitLoss": 120.5,
      "date": "2025-08-20"
    }
  ]
}


