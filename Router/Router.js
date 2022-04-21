const express = require("express");
const router = express.Router();
const {
  postTution,
  getOneTution,
  getTution,
  updateTution,
} = require("../Controller/Controller");

router.route("/api").get(getTution).post(postTution);
router.route("/api/:id").get(getOneTution).patch(updateTution);

module.exports = router;
