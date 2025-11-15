import React from "react";
import "./ForecastCard.css";

function ForecastCard({ forecast }) {
  // Ensure forecast is always an array
  const days = Array.isArray(forecast) ? forecast : [];

  return (
    <div className="forecast-card">
      <h2 className="forecast-title">5-Day Forecast</h2>
      <div className="forecast-list">
        {days.length > 0 ? (
          days.map((day, index) => (
            <div key={index} className="forecast-item">
              <span className="day">{day.day}</span>
              <img
                src={day.icon}
                alt={day.description || "weather"}
                className="forecast-icon"
              />
              <div className="temps">
                <span className="high">{day.high}°</span>
                <span className="low">{day.low}°</span>
              </div>
            </div>
          ))
        ) : (
          <p className="no-forecast">No forecast available</p>
        )}
      </div>
    </div>
  );
}

export default ForecastCard;
