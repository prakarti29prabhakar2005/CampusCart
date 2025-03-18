const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    productId: {type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
    quantityAvailable: {type: Number, required: true},
    restockThreshold: {type: Number, default: true},
    lastRestockedAt: {type: Date, default: null}
}, {timestamps: true});

module.exports = mongoose.model("Inventory", inventorySchema);