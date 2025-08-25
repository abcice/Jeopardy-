const express = require("express");
const router = express.Router();
const Jeopardy = require("../models/Jeopardy");

// GET all jeopardies
router.get("/", async (req, res) => {
  try {
    const games = await Jeopardy.find();
    res.json(games);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
