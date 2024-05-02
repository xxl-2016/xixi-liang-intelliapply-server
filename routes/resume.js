const express = require("express");
const router = express.Router();
const { generateResume } = require("../controllers/resume-controller");

router.get("/", async (req, res) => {
  const { username } = req.query;
  try {
    const resume = await generateResume(username);
    if (!resume) {
      return res.status(404).json({ error: "Resume not found" });
    }
    res.json(resume);
  } catch (error) {
    console.error("Error fetching resume:", error);
    res.status(500).json({ error: "Failed to fetch resume" });
  }
});

module.exports = router;
