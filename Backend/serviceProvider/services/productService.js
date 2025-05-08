const ProductRepository = require('../repository/productRepository');

const ProductService = {
    async createProduct(productData) {
        
        return await ProductRepository.createProduct(productData);
    },

    async getProductId(productId) {
        return await ProductRepository.getProductById(productId);
    },

    async updateProduct(productId, productData) {
        const updateProduct = ProductRepository.updateProduct(productId, productData);
        if(updateProduct.quantity <= 0) {
            await ProductRepository.toggleProductVisibility(productId, false);
        }
        return updateProduct;
    },

    async toggleProductVisibility(productId, status) {
        return await ProductRepository.toggleProductVisibility(productId, status);
    },

    async getAllProducts() {
        return await ProductRepository.getAllProducts();
    }
};

module.exports = ProductService;