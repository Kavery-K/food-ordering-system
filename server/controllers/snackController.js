const Snack = require("../models/Snacks");

// Add Snack
const addSnack = async (req, res) => {
  try {
    const snack = await Snack.create(req.body);
    res.status(201).json(snack);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Snacks
const getSnacks = async (req, res) => {
  try {
    const snacks = await Snack.find();
    res.status(200).json(snacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Snack
const deleteSnack = async (req, res) => {
  try {
    const snack = await Snack.findByIdAndDelete(req.params.id);

    if (!snack) {
      return res.status(404).json({
        message: "Snack not found",
      });
    }

    res.status(200).json({
      message: "Snack deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addSnack,
  getSnacks,
  deleteSnack,
};