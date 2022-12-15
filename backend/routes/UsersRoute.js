const express = require("express");
const router = express.Router();

const { showUsers, addUser } = require("../controllers/UsersController.js");

router.get("/", showUsers);
router.post("/", addUser);

module.exports = router;
