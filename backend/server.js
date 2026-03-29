const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const weatherRoutes = require("./routes/weather");


const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

  mongoose.connect("mongodb://localhost:27017/weatherDB")
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));


app.use("/api/weather", weatherRoutes);


app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});