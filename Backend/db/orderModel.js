const mongoose = require("mongoose");

const orderSchema = new mongoose.model({
    customerId: {type: mongoose.Schema.Types.ObjectId, ref:"Customer", required: true},
    serviceProviderId: {type: mongoose.Schema.Types.ObjectId, ref: "ServiceProvider", required: true},
    productsOrdered: [
        {
        productId: {type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
        quantity: {type: Number, required: true}
        }
    ],
    totalPrice: {type: Number, required: true},
    deliveryAddress: {type: String, required: true},
    status: {type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending'},
}, {timestamps: true});

module.exports = mongoose.model('Order', orderSchema);