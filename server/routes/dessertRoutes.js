const express = require("express");

const router = express.Router();


const {
addDessert,
getDessert
}=require("../controllers/dessertController");



router.post("/",addDessert);


router.get("/",getDessert);



module.exports=router;