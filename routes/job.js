const express = require("express");
const router = express.Router();
const { getJobList } = require("../controllers/job-controller");

router.get("/", async (req, res) => {
  try {
    const jobList = await getJobList();
    res.json(jobList);
  } catch (error) {
    console.error("Error fetching job list:", error);
    res.status(500).json({ error: "Failed to fetch job list" });
  }
});

module.exports = router;
