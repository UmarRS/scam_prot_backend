// controllers/votingController.js

const Voting = require("../models/voting");
const Site = require("../models/site");
//get all votes
exports.getVotings = async (req, res) => {
  try {
    const votings = await Voting.find();
    res.json(votings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//website upvote
exports.upvoteWebsite = async (req, res) => {
  const { id } = req.body;

  try {
    const website = await Voting.findById(id);

    if (!website) {
      return res.status(404).json({ message: "Website not found" });
    }

    //add 1 to votes
    website.currentvotes += 1;

    if (website.currentvotes >= 15) {
      //if 15 add to collection
      const existingSite = await Site.findOne();

      if (existingSite) {
        existingSite.sites.push(website.siteurl);
        await existingSite.save();
      } else {
        const newSite = new Site({
          sites: [website.siteurl],
        });
        await newSite.save();
      }

      await Voting.findByIdAndDelete(id);
      res.status(200).json({ message: "Website moved to sites collection" });
    } else {
      await website.save();
      res.status(200).json({ message: "Upvoted successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//new
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
