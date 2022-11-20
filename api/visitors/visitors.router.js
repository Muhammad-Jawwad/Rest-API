const router = require("express").Router();

const {
  createVisitors,
  getVisitors
} = require("./visitors.controller");


router.get("/", getVisitors);
router.post("/", createVisitors);

module.exports = router;