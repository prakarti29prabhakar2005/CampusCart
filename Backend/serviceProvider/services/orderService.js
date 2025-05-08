const OrderRepository = require('../repository/orderRepository');

const OrderService = {
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

    async deleteOrder(orderId) {
        return await OrderRepository.deleteOrder(orderId);
    }
};

module.exports = OrderService;