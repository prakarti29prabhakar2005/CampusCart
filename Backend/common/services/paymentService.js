const PaymentRepository = require("../common/repository/paymentRepository");

const PaymentService = {
    async createPayment(paymentData) {
        return await PaymentRepository.createPayment(paymentData);
    },

    async getPaymentById(paymentId) {
        return await PaymentRepository.getPaymentById(paymentId);
    },

    async updatePaymentStatus(paymentId, status) {
         // payment proof mail to the customer if payment is successful
        return await PaymentRepository.updatePaymentStatus(paymentId, status);
    },

    async getAllPayments() {
        return await PaymentRepository.getAllPayments();
    },

    async deletePayment(paymentId) {
        return await PaymentRepository.deletePayment(paymentId);
    }
};

module.exports = PaymentService;