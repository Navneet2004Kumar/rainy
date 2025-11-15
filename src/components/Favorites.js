import React, { useState, useEffect } from "react";
import "./Favorites.css";

function Favorites({ onSelectCity }) {
  const [favorites, setFavorites] = useState([]);

  // Load saved cities from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  // Add a city to favorites
  const addFavorite = (city) => {
    if (!city || favorites.includes(city)) return;
    const updated = [...favorites, city];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  // Remove a city from favorites
  const removeFavorite = (city) => {
    const updated = favorites.filter((item) => item !== city);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="favorites">
      <h2>⭐ Favorite Cities</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((city, index) => (
            <div key={index} className="favorite-item">
              <span onClick={() => onSelectCity(city)}>{city}</span>
              <button
                className="remove-btn"
                onClick={() => removeFavorite(city)}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="add-fav">
        <input
          type="text"
          id="cityInput"
          placeholder="Add new city"
          onKeyDown={(e) => {
            if (e.key === "Enter") addFavorite(e.target.value.trim());
          }}
        />
        <button
          onClick={() =>
            addFavorite(document.getElementById("cityInput").value.trim())
          }
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Favorites;
