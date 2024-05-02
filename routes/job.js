const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));
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

router.post("/", async (req, res) => {
  try {
    const {
      id,
      username,
      job_title,
      company_name,
      location,
      applied,
      followup,
      post_date,
    } = req.body;

    await knex("jobs").insert({
      id,
      username,
      job_title,
      company_name,
      location,
      applied,
      followup,
      post_date,
    });

    const newJob = await knex("jobs").where({ id }).first();
    res.status(201).json(newJob);
  } catch (error) {
    console.error("Error saving job:", error);
    res.status(500).json({ error: "Failed to apply to job" });
  }
});

router.delete("/:jobId", async (req, res) => {
  const { jobId } = req.params;
  try {
    await knex("jobs").where({ id: jobId }).del();
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ error: "Failed to delete job" });
  }
});

router.put("/:jobId", async (req, res) => {
  const { jobId } = req.params;
  try {
    const { applied } = req.body;
    await knex("jobs").where({ id: jobId }).update({ applied });
    const updatedJob = await knex("jobs").where({ id: jobId }).first();
    res.json(updatedJob);
  } catch (error) {
    console.error("Error updating job applied status:", error);
    res.status(500).json({ error: "Failed to update job applied status" });
  }
});

module.exports = router;
