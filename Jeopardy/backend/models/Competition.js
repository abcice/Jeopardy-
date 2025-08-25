const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String },
  score: { type: Number, default: 0 },
});

const competitionSchema = new mongoose.Schema({
  jeopardy: { type: mongoose.Schema.Types.ObjectId, ref: "Jeopardy" },
  teams: [teamSchema],
  status: { type: String, enum: ["pending", "running", "finished"], default: "pending" },
}, { timestamps: true });

module.exports = mongoose.model("Competition", competitionSchema);
