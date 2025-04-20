const mongoose = require("mongoose");
const OrderRepository = require('../repository/orderRepository');

const OrderService = {
    async createOrder(orderDate) {
        // will pass email notification for order placing for customer and service provider later
        return await OrderRepository.createOrder(orderDate);
    },

    async getOrderById(orderId) {
        return await OrderRepository.getOrderById(orderId);
    },

    async updateOrderStatus(orderId, newStatus) {
        return await OrderRepository.updateOrderStatus(orderId, newStatus);
    },

    async updatePaymentStatus(orderId, paymentStatus) {
        return await OrderRepository.updatePaymentStatus(orderId, paymentStatus);
    },

    async getAllOrders() {
        return await OrderRepository.getAllOrders();
    },

    // async deleteOrder(orderId) {
    //     return await OrderRepository.deleteOrder(orderId);
    // }
    async deleteOrder(id) {
        return await Order.findByIdAndDelete(new mongoose.Types.ObjectId(id));
    },
};

module.exports = OrderService;