const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the resume upload page");
});

module.exports = router;
