const Cart = require("../models/Cart");

// Add Item
const addToCart = async (req, res) => {
  try {

    const existingItem = await Cart.findOne({
      name: req.body.name
    });

    if (existingItem) {

      existingItem.quantity += 1;

      await existingItem.save();

      return res.json(existingItem);
    }

    const cartItem = await Cart.create(req.body);

    res.status(201).json(cartItem);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get Cart
const getCart = async (req, res) => {
  try {

    const items = await Cart.find();

    res.json(items);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete Item
const deleteCartItem = async (req, res) => {
  try {

    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      message: "Item Deleted"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  deleteCartItem
};