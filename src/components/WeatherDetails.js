import React from 'react';
import './WeatherDetails.css';

function WeatherDetails({ details }) {
  // Mock data if none provided
  const defaultDetails = {
    humidity: 65,
    windSpeed: 15,
    pressure: 1013,
    visibility: 10,
    uvIndex: 6,
    feelsLike: 20,
    sunrise: '06:30 AM',
    sunset: '07:45 PM'
  };

  const data = details || defaultDetails;

  const getUVLevel = (uv) => {
    if (uv <= 2) return { level: 'Low', color: '#4caf50' };
    if (uv <= 5) return { level: 'Moderate', color: '#ffeb3b' };
    if (uv <= 7) return { level: 'High', color: '#ff9800' };
    return { level: 'Very High', color: '#f44336' };
  };

  const uvInfo = getUVLevel(data.uvIndex ?? defaultDetails.uvIndex);

  return (
    <div className="weather-details">
      <h2>Weather Details</h2>

      <div className="details-grid">
        {/* Feels Like */}
        <div className="detail-card">
          <div className="detail-icon">🌡</div>
          <div className="detail-content">
            <span className="detail-label">Feels Like</span>
            <span className="detail-value">{data.feelsLike ?? defaultDetails.feelsLike}°C</span>
          </div>
        </div>

        {/* Humidity */}
        <div className="detail-card">
          <div className="detail-icon">💧</div>
          <div className="detail-content">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{data.humidity ?? defaultDetails.humidity}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${data.humidity ?? defaultDetails.humidity}%` }}
            ></div>
          </div>
        </div>

        {/* Wind Speed */}
        <div className="detail-card">
          <div className="detail-icon">💨</div>
          <div className="detail-content">
            <span className="detail-label">Wind Speed</span>
            <span className="detail-value">{data.windSpeed ?? defaultDetails.windSpeed} km/h</span>
          </div>
        </div>

        {/* Pressure */}
        <div className="detail-card">
          <div className="detail-icon">🔽</div>
          <div className="detail-content">
            <span className="detail-label">Pressure</span>
            <span className="detail-value">{data.pressure ?? defaultDetails.pressure} hPa</span>
          </div>
        </div>

        {/* Visibility */}
        <div className="detail-card">
          <div className="detail-icon">👁</div>
          <div className="detail-content">
            <span className="detail-label">Visibility</span>
            <span className="detail-value">{data.visibility ?? defaultDetails.visibility} km</span>
          </div>
        </div>

        {/* UV Index */}
        <div className="detail-card">
          <div className="detail-icon">☀</div>
          <div className="detail-content">
            <span className="detail-label">UV Index</span>
            <span
              className="detail-value"
              style={{ color: uvInfo.color }}
            >
              {data.uvIndex ?? defaultDetails.uvIndex} - {uvInfo.level}
            </span>
          </div>
        </div>

        {/* Sunrise */}
        <div className="detail-card sun-card">
          <div className="detail-icon">🌅</div>
          <div className="detail-content">
            <span className="detail-label">Sunrise</span>
            <span className="detail-value">{data.sunrise ?? defaultDetails.sunrise}</span>
          </div>
        </div>

        {/* Sunset */}
        <div className="detail-card sun-card">
          <div className="detail-icon">🌇</div>
          <div className="detail-content">
            <span className="detail-label">Sunset</span>
            <span className="detail-value">{data.sunset ?? defaultDetails.sunset}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
