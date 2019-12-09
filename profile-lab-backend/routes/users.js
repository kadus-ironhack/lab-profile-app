const express = require("express");
const router = express.Router();
const User = require("../Models/User");

router.get("/", (req, res, next) => {
  res.render("Hello from User route");
});

module.exports = router;
