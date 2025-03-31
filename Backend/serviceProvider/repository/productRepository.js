const Product = require("../../db/productModel");

const ProductRepository = {
    async createProduct(productData) {
        return await Product.create(productData);
    },

    async getProductById(productId) {
        return await Product.findById(productId);
    },

    async updateProduct(productId, updatedData) {
        const updatedProduct = await Product.findByIdAndUpdate(productId, updatedData, {new: true});
        if(updatedProduct.quantityAvailable === 0) {
            await Product.findByIdAndUpdate(productId, { visibility: false });
        }
        return updatedProduct;
    },

    // async toggleProductVisibility(productId, visibilityStatus) {
    //     return await Product.findByIdAndUpdate(productId, { visibility: visibilityStatus }, { new: true });
    // },

    async getAllProducts() {
        return await Product.find();
    }
}

module.exports = ProductRepository;