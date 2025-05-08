const Product = require('../db/productModel'); 

const ProductRepository = {
    async getProductById(productId) {
        return await Product.findById(productId);
    },

    async getAllVisibleProducts() {
        return await Product.find({ visibility: true });
    },

    async getAllProducts() {
        return await Product.find();
    }
};

module.exports = ProductRepository;
