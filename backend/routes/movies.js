const express = require("express");
const router = express.Router();
const {
  movieSearch,
  moviePopular,
  movieUpcoming,
  movieDetails,
} = require("../controllers/movies.js");

router.get("/search", movieSearch);

router.get("/popular", moviePopular);

router.get("/upcoming", movieUpcoming);

router.post("/details", movieDetails);

module.exports = router;
