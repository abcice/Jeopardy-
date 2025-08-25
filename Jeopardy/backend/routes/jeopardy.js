const express = require("express");
const router = express.Router();

// Example placeholder route
router.get("/", (req, res) => {
  res.send("Jeopardy route is working!");
});

module.exports = router;
