const Order = require("../db/orderModel");
const Customer = require("../../db/customerModel");

const OrderRepository = {
  async createOrder(orderData) {
    return await Order.create(orderData);
  },
  async getOrderById(orderId) {
    return await Order.findById(orderId).populate(
      "customerId serviceProviderId productsOrdered.productId"
    );
  },

  async getAllOrders() {
    return await Order.find().populate(
      "customerId serviceProviderId productsOrdered.productId"
    );
  },

  async deleteOrder(orderId) {
    return await Order.findByIdAndDelete(orderId);
  },
};

module.exports = OrderRepository;
