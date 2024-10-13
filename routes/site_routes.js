const express = require("express");
const router = express.Router();
const siteController = require("../controllers/site_controller");

router.get("/", siteController.getSites);
router.post("/", siteController.createSite);

module.exports = router;
