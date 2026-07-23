const express = require("express");

const router = express.Router();

const {
  addToCart,
  getCart,
  deleteCartItem
} = require("../controllers/cartController");

router.post("/", addToCart);

router.get("/", getCart);

router.delete("/:id", deleteCartItem);

module.exports = router;