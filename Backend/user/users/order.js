const OrderRepository = require('../repository/orderRepository');

const Order = {
    async createOrder(orderData) {
        return await OrderRepository.createOrder(orderData);
    },

    async getOrderById(orderId) {
        return await OrderRepository.getOrderById(orderId);
    },

    async getAllOrders() {
        return await OrderRepository.getAllOrders();
    },

    async deleteOrder(orderId) {
        return await OrderRepository.deleteOrder(orderId);
    }
};

module.exports = Order;
