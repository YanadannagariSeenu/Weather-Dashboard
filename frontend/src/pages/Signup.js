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
    <div className="auth-container">
      <div className="auth-card">
        <h1>⛅ Weather Dashboard</h1>
        <h2>Signup</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
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