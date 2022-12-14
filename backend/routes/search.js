const express = require("express");
const router = express.Router();
const { movieSearch } = require("../controllers/movies.js");

router.get("/search", movieSearch);

module.exports = router;
