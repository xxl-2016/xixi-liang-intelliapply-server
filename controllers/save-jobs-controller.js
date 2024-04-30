const knex = require("knex")(require("../knexfile"));

const findOne = async (req, res) => {
  try {
    const jobs = await knex("jobs").where({ username: req.params.username });
    if (!jobs) {
      return res
        .status(404)
        .json({ error: `Job with username ${req.params.username} not found` });
    }
    res.status(200).json({ jobs });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
};
module.exports = {
  findOne,
};
