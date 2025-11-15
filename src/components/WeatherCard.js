import "./WeatherCard.css";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";

function WeatherCard({ weather }) {
  const getWeatherIcon = (main) => {
    switch (main.toLowerCase()) {
      case "clear":
        return <WiDaySunny className="weather-icon" style={{ color: "#FFD54F" }} />;
      case "clouds":
        return <WiCloudy className="weather-icon" style={{ color: "#ECEFF1" }} />;
      case "rain":
      case "drizzle":
        return <WiRain className="weather-icon" style={{ color: "#4FC3F7" }} />;
      case "snow":
        return <WiSnow className="weather-icon" style={{ color: "#E0F7FA" }} />;
      case "thunderstorm":
        return <WiThunderstorm className="weather-icon" style={{ color: "#FFCA28" }} />;
      default:
        return <WiDaySunny className="weather-icon" style={{ color: "#FFF176" }} />;
    }
  };

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="city-name">
          {weather.name}, {weather.sys.country}
        </h2>
        <p className="weather-description">{weather.weather[0].description}</p>
      </div>

      <div className="weather-main">
        {getWeatherIcon(weather.weather[0].main)}
        <div className="temperature">{Math.round(weather.main.temp)}°C</div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Feels Like</span>
          <span className="detail-value">
            {Math.round(weather.main.feels_like)}°C
          </span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{weather.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{weather.wind.speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{weather.main.pressure} hPa</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;


