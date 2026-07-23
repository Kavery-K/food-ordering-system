const express = require("express");

const router = express.Router();


const {

    addFood,
    getFood,
    deleteFood

} = require("../controllers/foodController");



// Add Food

router.post("/", addFood);


// Get Food

router.get("/", getFood);
// Delete Food
router.delete("/:id", deleteFood);



module.exports = router;