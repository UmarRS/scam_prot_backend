const express = require("express");
const router = express.Router();
const geminiController = require("../controllers/gemini_controller");

router.post("/speak", geminiController.handler);

module.exports = router;
