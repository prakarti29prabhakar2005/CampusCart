const Inventory = require('../db/inventoryModel');

const InventoryRepository = {
    async getInventoryByProductId(productId) {
        return await Inventory.findOne({productId});
    },

    async updateStock(productId, quantity) {
        return await Inventory.findOneAndUpdate({productId}, { $inc: { quantityAvailable: -quantity } }, {new: true});
    },

    async restockProduct(productId, quantity) {
        return await Inventory.findOneAndUpdate({productId}, { $inc: { quantityAvailable: quantity }, lastRestockedAt: new Date()}, {new: true});
    }
}

module.exports = InventoryRepository;