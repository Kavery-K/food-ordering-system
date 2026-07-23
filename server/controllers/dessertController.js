const Food = require("../models/Food");

const addDessert = async(req,res)=>{

try{

const dessert = new Food({

name:req.body.name,
price:req.body.price,
image:req.body.image,
description:req.body.description,
category:"Dessert"

});


await dessert.save();


res.status(201).json({
message:"Dessert Added Successfully",
dessert
});


}
catch(error){

res.status(500).json({
message:error.message
});

}

};




// Get Dessert

const getDessert = async(req,res)=>{

try{


const desserts = await Food.find({
category:"Dessert"
});


res.json(desserts);


}
catch(error){

res.status(500).json({
message:error.message
});

}


};



module.exports={
addDessert,
getDessert
};