const ProductRepository = require('../repository/productRepository');

const Product = {
    async getProductById(productId) {
        return await ProductRepository.getProductById(productId);
    },

    async getAllVisibleProducts() {
        return await ProductRepository.getAllVisibleProducts();
    },

    async getAllProducts() {
        return await ProductRepository.getAllProducts();
    }
};

module.exports = Product;
