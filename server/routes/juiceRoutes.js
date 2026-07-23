const express = require("express");
const router = express.Router();

const {
  addJuice,
  getJuices,
  deleteJuice,
} = require("../controllers/juiceController");

router.post("/", addJuice);
router.get("/", getJuices);
router.delete("/:id", deleteJuice);

module.exports = router;