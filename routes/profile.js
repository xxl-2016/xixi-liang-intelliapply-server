require("dotenv").config();
const knex = require("knex")(require("../knexfile"));
const express = require("express");
const router = express.Router();
const { tokenVerify } = require("../middlewares/auth.middleware");

router.get("/", tokenVerify, async (req, res) => {
  const user = await knex("users").where({ id: req.userObj.id }).first();

  console.log("profile", user);

  res.status(200).json({
    username: user.username,
    email: user.email,
  });
});

module.exports = router;
