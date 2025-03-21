const { model } = require("mongoose");
const Order = require("../db/orderModel");

const OrderRepository = {
    async createOrder(orderData) {
        return await Order.create(orderData);
    },

    async getOrderById(orderId) {
        return await Order.findById(orderId).populate("customerId serviceProviderId productsOrdered.productId");
    },

    async updateOrderStatus(orderId, newStatus) {
        return await Order.findByIdAndUpdate(orderId, {status: newStatus}, {new: true});
    },

    async updatePaymentStatus(orderId, paymentStatus) {
        return await Order.findByIdAndUpdate(orderId, { paymentStatus }, { new: true });
    },

    async getAllOrders() {
        return await Order.find().populate("customerId serviceProviderId productsOrdered.productId");
    },

    async deleteOrder(orderId) {
        return await Order.findByIdAndDelete(orderId);
    }
}

module.exports = OrderRepository;