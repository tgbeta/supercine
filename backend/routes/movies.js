const express = require("express");
const router = express.Router();
const { movieSearch } = require("../controllers/search.js");

router.get("/search", movieSearch);

module.exports = router;
