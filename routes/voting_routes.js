// routes/votingRoutes.js

const express = require("express");
const router = express.Router();
const votingController = require("../controllers/voting_controller");

router.get("/getvotes", votingController.getVotings);
router.post("/createwebsite", votingController.createWebsite);
router.post("/upvote", votingController.upvoteWebsite);

module.exports = router;
