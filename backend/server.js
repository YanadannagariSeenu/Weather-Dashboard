require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const weatherRoutes = require("./routes/weather");
const authRoutes = require("./routes/auth");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("MongoDB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Weather API running 🌤️");
});

// Routes
app.use("/api/weather", weatherRoutes);
app.use("/api/auth", authRoutes);

// Dynamic PORT (important for Render)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});