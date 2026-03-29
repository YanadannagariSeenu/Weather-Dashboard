function WeatherCard({ data }) {
  if (!data) return null;

  return (
    <div className="weather-card">
      <h2 className="city">{data.city}</h2>

      <p className="temp">Temperature: {data.temperature}°C</p>
      <p className="humidity">Humidity: {data.humidity}%</p>
      <p className="wind">Wind Speed: {data.windSpeed} m/s</p>

      <p className="prediction">
        Predicted Temp: {data.prediction?.toFixed(2)}°C 🔮
      </p>
    </div>
  );
}

export default WeatherCard;