const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User"); // ✅ make sure file name is User.js

const router = express.Router();


// ================= SIGNUP =================
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Signup request:", email, password);

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword
    });

    // Save to DB
    await newUser.save();

    console.log("User saved:", newUser);

    res.json({ message: "Signup successful ✅" });

  } catch (err) {
    console.log("Signup Error:", err);
    res.status(500).json({ message: "Signup failed ❌" });
  }
});


// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login request:", email);

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found ❌" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password ❌" });
    }

    res.json({ message: "Login successful ✅" });

  } catch (err) {
    console.log("Login Error:", err);
    res.status(500).json({ message: "Login failed ❌" });
  }
});


module.exports = router; // ✅ VERY IMPORTANT