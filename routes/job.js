const express = require("express");
const router = express.Router();
const { getJobList, getJobDetails } = require("../controllers/job-controller");

router.get("/", async (req, res) => {
  const { keywords } = req.query;
  try {
    const jobList = await getJobList(keywords);
    res.json(jobList);
  } catch (error) {
    console.error("Error fetching job list:", error);
    res.status(500).json({ error: "Failed to fetch job list" });
  }
});

router.get("/:jobId", async (req, res) => {
  const { jobId } = req.params;
  try {
    const jobDetails = await getJobDetails(jobId);
    res.json(jobDetails);
  } catch (error) {
    console.error("Error fetching job details:", error);
    res.status(500).json({ error: "Failed to fetch job details" });
  }
});

module.exports = router;
