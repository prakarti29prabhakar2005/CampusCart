const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
    amountPaid: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
    paymentMode: { type: String, enum: ['Cash', 'Card', 'UPI', 'Net Banking'], required: true },
    transactionId: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Payment", PaymentSchema);
