// routes/votingRoutes.js

const express = require("express");
const router = express.Router();
const votingController = require("../controllers/voting_controller");

router.get("/", votingController.getVotings);
router.post("/", votingController.createVoting);

module.exports = router;
