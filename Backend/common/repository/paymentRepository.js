const Payment = require('../db/paymentModel');

const PaymentRepository = {
    async createPayment(paymentData) {
        return await Payment.create(paymentData);
    },

    async getPaymentById(paymentId) {
        return await Payment.findById(paymentId).populate("orderId");
    },

    async updatePaymentStatus(paymentId, newStatus) {
        return await Payment.findByIdAndUpdate(paymentId, {paymentStatus: newStatus}, {new: true});
    },

    async getAllPayments() {
        return await Payment.find().populate("orderId");
    },

    async deletePayment(paymentId) {
        return await Payment.findByIdAndDelete(paymentId);
    }
}

module.exports = PaymentRepository;