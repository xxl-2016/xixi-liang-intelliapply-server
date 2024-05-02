const express = require("express");
const router = express.Router();
const {
  generateCoverLetter,
} = require("../controllers/coverletter-controller");

router.get("/", async (req, res) => {
  const { username } = req.query;
  try {
    const coverLetter = await generateCoverLetter(username);
    if (!coverLetter) {
      return res.status(404).json({ error: "Cover letter not found" });
    }
    res.json(coverLetter);
  } catch (error) {
    console.error("Error fetching cover letter:", error);
    res.status(500).json({ error: "Failed to fetch cover letter" });
  }
});

module.exports = router;