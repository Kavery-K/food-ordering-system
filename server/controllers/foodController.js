const Food = require("../models/Food");


// Add Food

const addFood = async (req, res) => {

    try {

        const food = new Food({

            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            description: req.body.description,
            category: "Food"

        });


        await food.save();


        res.status(201).json({

            message: "Food Added Successfully",
            food

        });


    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};
const deleteFood = async (req, res) => {

    try {

        const food = await Food.findByIdAndDelete(req.params.id);

        if (!food) {
            return res.status(404).json({
                message: "Food not found"
            });
        }

        res.status(200).json({
            message: "Food deleted successfully"
        });


    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// Get Food Items

const getFood = async (req, res) => {

    try {


        const foods = await Food.find({

            category: "Food"

        });


        res.status(200).json(foods);



    } catch (error) {


        res.status(500).json({

            message: error.message

        });


    }

};



module.exports = {

    addFood,
    getFood,
    deleteFood

};