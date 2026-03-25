import React, { useState, useEffect } from "react";
import axios from "axios";

function Search({ setWeather, selectedCity }) {
  const [city, setCity] = useState("");

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

  return (
    <div>
      <input
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={searchWeather}>Search</button>
    </div>
  );
}

export default Search;