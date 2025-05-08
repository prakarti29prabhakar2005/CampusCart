const { model } = require("mongoose");
const Order = require("../db/orderModel");

const OrderRepository = {
    async getOrderById(orderId) {
        return await Order.findById(orderId).populate("customerId serviceProviderId productsOrdered.productId");
    }, //both user and service provider

    async updateOrderStatus(orderId, newStatus) {
        return await Order.findByIdAndUpdate(orderId, {status: newStatus}, {new: true});
    },//service provider

    async updatePaymentStatus(orderId, paymentStatus) {
        return await Order.findByIdAndUpdate(orderId, { paymentStatus }, { new: true });
    },//user

    async getAllOrders() {
        return await Order.find().populate("customerId serviceProviderId productsOrdered.productId");
    },//both user and service provider

    async deleteOrder(orderId) {
        return await Order.findByIdAndDelete(orderId);
    }//both user and service provider
}

module.exports = OrderRepository;