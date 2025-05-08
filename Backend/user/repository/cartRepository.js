const Cart = require('../db/orderModel');

const CartRepository = {
    async getCartByUserId(userId) {
        return await Cart.findOne({ userId }).populate('items.productId');
    },

    async addToCart(userId, productId, quantity) {
        const cart = await Cart.findOne({ userId });

        if (cart) {
            const existingItem = cart.items.find(item => item.productId.toString() === productId);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.items.push({ productId, quantity });
            }
            cart.updatedAt = new Date();
            return await cart.save();
        } else {
            return await Cart.create({ userId, items: [{ productId, quantity }] });
        }
    },

    async removeFromCart(userId, productId) {
        return await Cart.findOneAndUpdate(
            { userId },
            { $pull: { items: { productId } } },
            { new: true }
        );
    },

    async clearCart(userId) {
        return await Cart.findOneAndUpdate(
            { userId },
            { $set: { items: [] } },
            { new: true }
        );
    }
};

module.exports = CartRepository;
