const Competition = require("../models/Competition");

exports.createCompetition = async (req, res) => {
  try {
    const competition = await Competition.create({
      jeopardy: req.body.jeopardyId,
      teams: req.body.teams,
    });
    res.json(competition);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCompetition = async (req, res) => {
  try {
    const competition = await Competition.findById(req.params.id).populate("jeopardy");
    res.json(competition);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
