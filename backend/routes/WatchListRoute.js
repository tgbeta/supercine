const express = require("express");
const router = express.Router();

const {
  showWatchList,
  addWatchList,
  deleteWatchList,
} = require("../controllers/WatchListController.js");

router.post("/", showWatchList);
router.post("/add", addWatchList);
router.post("/delete", deleteWatchList);

module.exports = router;
