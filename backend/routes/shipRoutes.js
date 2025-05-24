const express = require("express");
const {
  fetchShips,
  getShipDetails,
} = require("../controller/shipController.js");
// const getShipDetails = require("../controller/shipController.js");

const router = express.Router();

router.get("/", fetchShips);
router.get("/:id", getShipDetails);

module.exports = router;
