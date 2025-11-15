import { useState } from "react";
import "./App.css";
import "./styles/themes.css"; 

// Components
import SearchBar from "./components/SearchBar";
import Favorites from "./components/Favorites";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; 

  // 🔍 Fetch weather by city name
  const fetchWeather = async (city) => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // 🌈 Determine dynamic background based on weather condition
  const getWeatherClass = () => {
    if (!weather) return "";
    const condition = weather.weather[0].main.toLowerCase();
    if (condition.includes("clear")) return "sunny";
    if (condition.includes("rain")) return "rainy";
    if (condition.includes("cloud")) return "cloudy";
    if (condition.includes("snow")) return "snow";
    return "";
  };

  return (
    <div className={`App ${getWeatherClass()}`}>
      <div className="container">
        <h1 className="title">🌦 Weather App</h1>
        <p className="subtitle">Get real-time weather updates worldwide</p>

        {/* 🌗 Theme Toggle */}
        <ThemeToggle />

        {/* 🔎 Search Bar */}
        <SearchBar onSearch={fetchWeather} />

        {/* ⭐ Favorites Section */}
        <Favorites onSelectCity={fetchWeather} />

        {/* 🌀 Loading & Error States */}
        {loading && <div className="loading">Loading...</div>}
        {error && <div className="error">{error}</div>}

        {/* ☀️ Weather Info */}
        {weather && (
          <>
            <WeatherCard weather={weather} />
            <WeatherDetails
              details={{
                humidity: weather.main.humidity,
                windSpeed: (weather.wind.speed * 3.6).toFixed(1), // m/s → km/h
                pressure: weather.main.pressure,
                visibility: (weather.visibility / 1000).toFixed(1), // m → km
                feelsLike: Math.round(weather.main.feels_like),
                sunrise: new Date(weather.sys.sunrise * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                sunset: new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                uvIndex: Math.floor(Math.random() * 10), 
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
