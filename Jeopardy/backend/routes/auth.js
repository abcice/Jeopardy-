import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ message: "Login route placeholder" });
});

export default router;
