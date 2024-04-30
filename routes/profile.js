require("dotenv").config();
const knex = require("knex")(require("../knexfile"));
const express = require("express");
const router = express.Router();
const { tokenVerify } = require("../middlewares/auth.middleware");

router.get("/", tokenVerify, async (req, res) => {
  try {
    const user = await knex("users").where({ id: req.userObj.id }).first();
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

module.exports = router;
