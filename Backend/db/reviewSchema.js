const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    customerId: {type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true},
    serviceProviderId: {type: mongoose.Schema.Types.ObjectId, ref: "ServiceProvider", required: true},
    productId: {type: mongoose.Schema.Types.ObjectId, ref: "Product", required: false},
    rating: {type: Number, min: 0, max: 5, required: true},
    reviewText: {type: String},
}, {timestamps: true});

module.exports = mongoose.model("Review", REviewSchema);