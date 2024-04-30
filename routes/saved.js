const express = require("express");
const router = express.Router();
const { tokenVerify } = require("../middlewares/auth.middleware");
const knex = require("knex")(require("../knexfile"));
const saveJobsController = require("../controllers/save-jobs-controller");

router.get("/", tokenVerify, async (req, res) => {
  try {
    const { username } = req.query;
    let data;
    if (username) {
      data = await knex("jobs").where({ username });
    } else {
      data = await knex("jobs");
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(`Error retrieving Jobs: ${error}`);
  }
});

router.route("/:username").get(saveJobsController.findOne);

module.exports = router;
