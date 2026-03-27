import React from "react";

function WeatherCard({ data }) {
  if (!data) return null;

  return (
    <div className="weather-card">
      <h2>{data.city}</h2>

      <p>Temperature: {data.temperature}°C</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.windSpeed} m/s</p>

      <p>Predicted Temp: {data.prediction?.toFixed(2)}°C 🔮</p>
    </div>
  );
}

export default WeatherCard;