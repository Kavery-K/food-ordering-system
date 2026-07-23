const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
{
    customerName: String,
    phone: String,
    address: String,
    location: String,
    pincode: String,

    items: Array,

    totalAmount: Number,

    paymentMethod: String,

    status:{
        type:String,
        default:"Preparing"
    }

},
{timestamps:true}
);

module.exports = mongoose.model("Order",orderSchema);