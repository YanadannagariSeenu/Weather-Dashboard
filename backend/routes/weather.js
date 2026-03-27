const express = require("express");
const axios = require("axios");
const Weather = require("../models/Weather");
const { exec } = require("child_process");

const router = express.Router();

const API_KEY = "bf512853d67c37be99c047e62593427d";

router.get("/:city", async (req, res) => {
  try {
    const city = req.params.city;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = response.data;

    if (!data || !data.list || data.list.length === 0) {
      return res.status(400).json({ message: "Invalid city" });
    }

    const weatherData = {
      city: city,
      temperature: data.list[0].main.temp,
      humidity: data.list[0].main.humidity,
      windSpeed: data.list[0].wind.speed,
      windDirection: data.list[0].wind.deg,
      forecast: data.list.slice(0, 5)
    };

    const runML = (temp, humidity, wind) => {
      return new Promise((resolve) => {
        exec(
          `py ../ml/model.py ${temp} ${humidity} ${wind}`,
          (error, stdout, stderr) => {
            if (error) {
              console.log("ML Error:", error.message);
              resolve(0);
            } else {
              resolve(stdout);
            }
          }
        );
      });
    };

    const predictedTemp = await runML(
      weatherData.temperature,
      weatherData.humidity,
      weatherData.windSpeed
    );

    weatherData.prediction = parseFloat(predictedTemp);

    //const newWeather = new Weather(weatherData);
    //await newWeather.save();

    res.json(weatherData);

  } catch (error) {
    console.log("ERROR:", error.response?.data || error.message);

    res.status(500).json({
      message: "Error fetching weather",
      error: error.response?.data || error.message
    });
  }
});

module.exports = router;