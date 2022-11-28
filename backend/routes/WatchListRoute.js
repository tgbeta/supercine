const express = require("express");
const router = express.Router();

const {
  showWatchList,
  addWatchList,
  deleteWatchList,
} = require("../controllers/WatchListController.js");

router.get("/", showWatchList);
// router.post("/:id", addWatchList);
// router.post("/:id/delete", deleteWatchList);

module.exports = router;
