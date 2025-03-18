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

    async getAllOrders() {
        return await Order.find().populate("customerId serviceProviderId productsOrdered.productId");
    }
}

model.exports = OrderRepository;