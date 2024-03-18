const express = require("express");
const collection = require("./mongo"); // Ensure this provides a valid MongoDB collection
const cors = require("cors");
const { response } = require("express");
const app = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Apply CORS globally

// GET request with basic error handling
app.get("/", (req, res) => {
  try {
    // Implement your GET request logic here
    res.json({ message: "GET request successful" }); // Example response
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// POST request with improved error handling
app.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate user input (recommended)
    // ...

    const check = await collection.findOne({ user: username });

    if (check) {
      res.status(409).json("exists"); // Use more specific status code
    } else {
      res.json("notexist");
      // Add user creation logic if applicable
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = app;
