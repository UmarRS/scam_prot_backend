const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();

//cors and express
app.use(express.json());
app.use(cors());

//routes
const siteRoutes = require("./routes/site_routes");
const votingRoutes = require("./routes/voting_routes");
const geminiRoutes = require("./routes/gemini_routes");

app.use("/api/sites", siteRoutes);
app.use("/api/voting", votingRoutes);
app.use("/api/gemini", geminiRoutes);

//MONGODB STUFF
mongoose
  .connect(
    "mongodb+srv://umarsyed:njqqiEqhfVkp4rz9@scamprotection.xa7xv.mongodb.net/?retryWrites=true&w=majority&appName=scamprotection",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5001, () => console.log("Server running on port 5001"));
  })
  .catch((err) => console.error("Could not connect to MongoDB...", err));
