const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const userRoutes = require("./routes/userRoutes");
const foodRoutes = require("./routes/foodRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const dessertRoutes = require("./routes/dessertRoutes");
const juiceRoutes = require("./routes/juiceRoutes");
const snackRoutes = require("./routes/snackRoutes");

console.log("Route impoted successfully");
console.log(process.env.MONGO_URI);


app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/desserts", dessertRoutes);
app.use("/api/juices", juiceRoutes);
app.use("/api/snacks", snackRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Food Ordering Backend is Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});