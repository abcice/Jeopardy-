const Jeopardy = require("../models/Jeopardy");

exports.createJeopardy = async (req, res) => {
  try {
    const jeopardy = await Jeopardy.create({
      title: req.body.title,
      categories: req.body.categories,
      author: req.user.id,
    });
    res.json(jeopardy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllJeopardies = async (req, res) => {
  try {
    const jeopardies = await Jeopardy.find({ author: req.user.id });
    res.json(jeopardies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
