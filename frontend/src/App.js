import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import WeatherGraph from "./components/WeatherGraph";
import WindDirection from "./components/WindDirection";
import RecentSearches from "./components/RecentSearches";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function Dashboard() {
  const [weather, setWeather] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="container">
      
      <div className="top-bar">
        <h1>⛅ Weather Dashboard</h1>

        <div className="menu">
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          {menuOpen && (
            <div className="dropdown">
              <p onClick={handleLogout}>Logout</p>
            </div>
          )}
        </div>
      </div>

      <Search setWeather={setWeather} selectedCity={selectedCity} />
      <RecentSearches onSelect={(city) => setSelectedCity(city)} />
      <WeatherCard data={weather} />

      <div className="dashboard-row">
        <div className="dashboard-box">
          <Forecast forecast={weather?.forecast} />
        </div>

        <div className="dashboard-box">
          <WeatherGraph forecast={weather?.forecast} />
        </div>
      </div>

      <WindDirection degree={weather?.windDirection} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;