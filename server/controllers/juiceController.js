const Juice = require("../models/Juice");

const addJuice = async (req, res) => {
  const juice = await Juice.create(req.body);
  res.json(juice);
};

const getJuices = async (req, res) => {
  const juices = await Juice.find();
  res.json(juices);
};

const deleteJuice = async (req, res) => {
  await Juice.findByIdAndDelete(req.params.id);
  res.json({ message: "Juice Deleted" });
};

module.exports = {
  addJuice,
  getJuices,
  deleteJuice,
};