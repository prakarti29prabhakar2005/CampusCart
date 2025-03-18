const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    company: {type: String, required: true},
    quantity: {type: Number, required: true},
    serviceProviderId: {type: mongoose.Schema.Types.ObjectId, ref: "ServiceProvider", required: true},
    visibility: { type: Boolean, default: true }
});

module.exports = mongoose.model("Product", ProductSchema);