const express = require("express");
const router = express.Router();
const { movieSearch } = require("../controllers/lists.js");

router.get("/lists", movieSearch);

module.exports = router;
