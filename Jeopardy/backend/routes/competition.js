const express = require("express");
const router = express.Router();

// Example placeholder route
router.get("/", (req, res) => {
  res.send("Competition route is working!");
});

module.exports = router;
