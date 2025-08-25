const express = require("express");
const router = express.Router();
const competitionController = require("../controllers/competitionController");

router.post("/", competitionController.createCompetition);
router.get("/:id", competitionController.getCompetition);

module.exports = router;
