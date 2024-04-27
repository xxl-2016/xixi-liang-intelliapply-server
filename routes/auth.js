require("dotenv").config();
const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  const user = await knex("users").where({ username: username }).first();
  if (!user) {
    return res.status(401).json({
      message: "combination of username/password is not found",
    });
  }
  const isPasswordMatching = user.password === password;

  if (!isPasswordMatching) {
    return res.status(401).json({
      message: "combination of username/password is not found",
    });
  }
  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.SECRET_KEY
  );

  res.status(200).json({
    access_token: token,
  });
});

module.exports = router;
