const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema({
  sites: [String],
});

module.exports = mongoose.model("Site", siteSchema);
