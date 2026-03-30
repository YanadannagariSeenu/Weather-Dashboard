import { useState } from "react";
import axios from "axios";
import "./auth.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/login", form);
     
      alert("Login successful ✅");
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Login failed ❌");
    }
  };

  return (
    <div className="login-container">

      <div className="login-left">
        <h2>⛅ Weather Dashboard</h2>

        <h1>
          Real-time weather insights, forecasts, and smart predictions in one place.
        </h1>

        <p>
          Explore live weather data, visualize trends, and use ML-powered predictions.
        </p>

        <div className="feature-box">📊 Interactive Graphs</div>
        <div className="feature-box">🌦 Live Forecast</div>
        <div className="feature-box">🤖 ML Prediction</div>
      </div>

      <div className="login-right">
        <h2>Sign In</h2>

        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button onClick={handleLogin}>Login</button>

        <p>
          New user? <a href="/signup">Sign Up</a>
        </p>
      </div>

    </div>
  );
}