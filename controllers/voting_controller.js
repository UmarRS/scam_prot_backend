// controllers/votingController.js

const Voting = require("../models/voting");

// Get all voting entries
exports.getVotings = async (req, res) => {
  try {
    const votings = await Voting.find();
    res.json(votings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new voting entry
exports.createVoting = async (req, res) => {
  const voting = new Voting({
    siteurl: req.body.siteurl,
    company: req.body.company,
    description: req.body.description,
    currentvotes: req.body.currentvotes,
  });

  try {
    const newVoting = await voting.save();
    res.status(201).json(newVoting);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
