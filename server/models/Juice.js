const mongoose = require("mongoose");

const juiceSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
  category: String
});

module.exports = mongoose.model("Juice", juiceSchema);