// models/Voting.js

const mongoose = require("mongoose");

const votingSchema = new mongoose.Schema({
  siteurl: { type: String, required: true },
  company: { type: String, required: true },
  description: String,
  currentvotes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Voting", votingSchema);
