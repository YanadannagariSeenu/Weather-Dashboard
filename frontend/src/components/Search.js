/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";

function Search({ setWeather, selectedCity }) {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const API_KEY = "bf512853d67c37be99c047e62593427d";

  useEffect(() => {
    if (selectedCity) {
      setCity(selectedCity);
      fetchWeather(selectedCity);
    }
  }, [selectedCity]);

  const saveCity = (cityName) => {
    let cities = JSON.parse(localStorage.getItem("recentCities")) || [];

    if (!cities.includes(cityName)) {
      cities.unshift(cityName);
      if (cities.length > 5) cities.pop();
    }

    localStorage.setItem("recentCities", JSON.stringify(cities));
  };

  const fetchWeather = async (cityName) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/weather/${cityName}`
      );

      setWeather(res.data);
      saveCity(cityName);
      setSuggestions([]);
      setCity(cityName);
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data?.message || "Error fetching weather");
    }
  };

  const searchWeather = () => {
    if (!city.trim()) {
      alert("Please enter a city");
      return;
    }

    fetchWeather(city);
  };

  const fetchSuggestions = async (value) => {
    if (!value) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API_KEY}`
      );

      setSuggestions(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>

      <input
        placeholder="Enter city"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          fetchSuggestions(e.target.value);
        }}
      />

      <button onClick={searchWeather}>Search</button>

      <div className="suggestions">
        {suggestions.map((place, index) => (
          <div
            key={index}
            className="suggestion-item"
            onClick={() => fetchWeather(place.name)}
          >
            {place.name}, {place.country}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Search;