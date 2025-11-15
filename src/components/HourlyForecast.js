import React from 'react';
import './HourlyForecast.css';

function HourlyForecast({ hourlyData }) {
  // Default mock data if API not loaded yet
  const defaultHourly = [
    { time: '12 AM', temp: 18, icon: '🌙', desc: 'Clear' },
    { time: '3 AM', temp: 17, icon: '🌙', desc: 'Clear' },
    { time: '6 AM', temp: 16, icon: '🌅', desc: 'Sunrise' },
    { time: '9 AM', temp: 19, icon: '☀️', desc: 'Sunny' },
    { time: '12 PM', temp: 22, icon: '☀️', desc: 'Sunny' },
    { time: '3 PM', temp: 24, icon: '☀️', desc: 'Hot' },
    { time: '6 PM', temp: 21, icon: '🌆', desc: 'Sunset' },
    { time: '9 PM', temp: 19, icon: '🌙', desc: 'Clear' }
  ];

  const hours = Array.isArray(hourlyData) && hourlyData.length > 0 ? hourlyData : defaultHourly;

  return (
    <div className="hourly-forecast">
      <h2 className="hourly-title">Hourly Forecast</h2>
      <div className="hourly-scroll">
        {hours.map((hour, index) => (
          <div key={index} className="hourly-item">
            <span className="hour-time">{hour.time}</span>
            {hour.icon.startsWith('http') ? (
              <img src={hour.icon} alt={hour.desc} className="hour-icon" />
            ) : (
              <span className="hour-icon-text">{hour.icon}</span>
            )}
            <span className="hour-temp">{hour.temp}°C</span>
            <span className="hour-desc">{hour.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;

