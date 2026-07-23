const User = require("../models/User");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = new User({
            name,
            email,
            password
        });

        await user.save();

        res.status(201).json({
            message: "User Registered Successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const loginUser = async (req, res) => {
    try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({
            message: "User Not Found"
        });
    }

    if (user.password !== password) {
        return res.status(400).json({
            message: "Invalid Password"
        });
    }

    res.status(200).json({
        message: "Login Successful",
    });

} catch (error) {
    res.status(500).json({
        message: error.message
    });
}
};
module.exports = {
    registerUser,
    loginUser
};