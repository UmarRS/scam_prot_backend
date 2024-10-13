const Site = require("../models/site");

//all site fetch
exports.getSites = async (req, res) => {
  try {
    const sites = await Site.find();
    res.json(sites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//make new site
exports.createSite = async (req, res) => {
  const site = new Site({
    sites: req.body.sites,
  });

  try {
    const newSite = await site.save();
    res.status(201).json(newSite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
