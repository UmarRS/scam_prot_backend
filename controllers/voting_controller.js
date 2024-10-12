// controllers/votingController.js

const Voting = require("../models/voting");
const Site = require("../models/site");
// Get all voting entries
// Get all voting entries
exports.getVotings = async (req, res) => {
  try {
    const votings = await Voting.find();
    res.json(votings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Upvote a website
exports.upvoteWebsite = async (req, res) => {
  const { id } = req.body;

  try {
    const website = await Voting.findById(id);

    if (!website) {
      return res.status(404).json({ message: "Website not found" });
    }

    // Increment votes
    website.currentvotes += 1;

    // Check if the website has reached 15 votes
    if (website.currentvotes >= 15) {
      // Add the URL to the sites collection
      const existingSite = await Site.findOne();

      if (existingSite) {
        // Add to the existing site's array of URLs
        existingSite.sites.push(website.siteurl);
        await existingSite.save();
      } else {
        // Create a new document if none exists
        const newSite = new Site({
          sites: [website.siteurl],
        });
        await newSite.save();
      }

      // Remove the website from votings collection
      await Voting.findByIdAndDelete(id);
      res.status(200).json({ message: "Website moved to sites collection" });
    } else {
      // Save the updated votes
      await website.save();
      res.status(200).json({ message: "Upvoted successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new voting entry
exports.createWebsite = async (req, res) => {
  const { siteurl, company, description } = req.body;

  const voting = new Voting({
    siteurl: siteurl,
    company: company,
    description: description,
    currentvotes: 0,
  });

  try {
    const newVoting = await voting.save();
    res.status(201).json(newVoting);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
