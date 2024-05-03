const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.post("/", async (req, res) => {
  try {
    const {
      username,
      firstName,
      lastName,
      address,
      email,
      phone,
      location,
      linkedin,
      github,
      portfolio,
      skills,
      experience,
      education,
      certifications,
    } = req.body;

    await knex("resumes").insert({
      username,
      first_name: firstName,
      last_name: lastName,
      address,
      email,
      phone,
      location,
      linkedin,
      github,
      portfolio,
      skills,
      experience: JSON.stringify(experience),
      education: JSON.stringify(education),
      certifications: JSON.stringify(certifications),
    });

    res.status(201).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Failed to insert data" });
  }
});

router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const info = await knex("resumes").where({ username }).first();
    if (!info) {
      return res.status(404).json({ error: "info not found" });
    }

    res.status(200).json(info);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

router.put("/:username", async (req, res) => {
  const { username } = req.params;
  const {
    address,
    email,
    phone,
    location,
    linkedin,
    github,
    portfolio,
    skills,
    experience,
    education,
    certifications,
  } = req.body;

  try {
    const existingResume = await knex("resumes").where({ username }).first();
    if (!existingResume) {
      return res.status(404).json({ error: "Resume not found" });
    }

    const updatedResume = {
      address,
      email,
      phone,
      location,
      linkedin,
      github,
      portfolio,
      skills,
      experience: JSON.stringify(experience),
      education: JSON.stringify(education),
      certifications: JSON.stringify(certifications),
    };

    await knex("resumes").where({ username }).update(updatedResume);

    res.status(200).json({ message: "Resume updated successfully" });
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Failed to update resume" });
  }
});

module.exports = router;
