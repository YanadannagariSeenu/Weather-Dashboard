import { useState } from "react";
import axios from "axios";
import "./auth.css";

export default function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSignup = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/signup",
        form
      );
      alert("Signup successful ✅");
      window.location.href = "/";
    } catch (err) {
      alert("Signup failed ❌");
    }
  };

  return (
    <div className="login-container">

      <div className="login-left">
        <h2>⛅ Weather Dashboard</h2>

        <h1>
          Create your account and start exploring weather intelligence.
        </h1>

        <p>
          Get access to forecasts, graphs, and ML-powered predictions.
        </p>
      </div>

      <div className="login-right">
        <h2>Sign Up</h2>

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

        <button onClick={handleSignup}>Signup</button>

        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>

    </div>
  );
}