// index.js

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import Routes
const siteRoutes = require("./routes/site_routes");
const votingRoutes = require("./routes/voting_routes");

// Use Routes
app.use("/sites", siteRoutes);
app.use("/voting", votingRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/your-database-name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successful DB connection
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((err) => console.error("Could not connect to MongoDB...", err));
