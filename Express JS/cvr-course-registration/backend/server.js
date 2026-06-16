const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 5000;
const JSON_SERVER_URL = "http://localhost:3000";

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("CVR Course Registration Backend is Running!");
});

// Get all courses
app.get("/courses", async (req, res) => {
  try {
    const response = await axios.get(`${JSON_SERVER_URL}/courses`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses" });
  }
});

// Register a student
app.post("/register", async (req, res) => {
  try {
    const registration = req.body;

    const response = await axios.post(
      `${JSON_SERVER_URL}/registrations`,
      registration
    );

    res.status(201).json({
      success: true,
      message: "Registration successful!",
      data: response.data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Registration failed"
    });
  }
});

// Get all registrations
app.get("/registrations", async (req, res) => {
  try {
    const response = await axios.get(
      `${JSON_SERVER_URL}/registrations`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching registrations"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Express Server running at http://localhost:${PORT}`);
});