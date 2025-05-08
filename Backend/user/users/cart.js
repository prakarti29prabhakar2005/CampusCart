const CartRepository = require('../repository/cartRepository');

const Cart = {
    async getCartByUserId(userId) {
        return await CartRepository.getCartByUserId(userId);
    },

    async addToCart(userId, productId, quantity) {
        return await CartRepository.addToCart(userId, productId, quantity);
    },
    async removeFromCart(userId, productId) {
        return await CartRepository.removeFromCart(userId, productId);
    },

    async clearCart(userId) {
        return await CartRepository.clearCart(userId);
    }
};

module.exports = Cart;
