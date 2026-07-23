const express = require("express");
const router = express.Router();

const {
  addSnack,
  getSnacks,
  deleteSnack,
} = require("../controllers/snackController");

router.post("/", addSnack);
router.get("/", getSnacks);
router.delete("/:id", deleteSnack);

module.exports = router;