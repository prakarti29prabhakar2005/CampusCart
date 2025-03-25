const InventoryRepository = require('../repository/inventoryRepository');
const ProductRepository = require('../repository/productRepository');

const InventoryService = {
    async getInventoryByProductId(productId) {
        return await InventoryRepository.getInventoryByProductId(productId);
    },

    // updating the stock based on purchase
    async updateStock(productId, quantity) {
        return await InventoryRepository.updateStock(productId, quantity);
    },

    //adding product quantity for selling
    async restockProduct(productId, quantity) {
        return await InventoryRepository.restockProduct(productId, quantity);
    },

    async checkRestock(productId) {
        const inventory = InventoryRepository.getInventoryByProductId(productId);
        if(!inventory)  return null;

        const product = await ProductRepository.getProductById(productId);
        if(inventory.quantityAvailable < inventory.restockThreshold) {
            window.alert('Product [${product.name}] with ID : ${productId} needs restock!'); //will use email notification here later instead of alert message
        }
        return inventory;
    }
};

module.exports = InventoryService;