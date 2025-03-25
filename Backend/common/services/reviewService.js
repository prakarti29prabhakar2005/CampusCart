const ReviewRepository = require("../common/repository/reviewRepository");

const ReviewService = {
    async createReview(reviewData) {
        return await ReviewRepository.createReview(reviewData);
    },

    async getReviewById(reviewId) {
        return await ReviewRepository.getReviewById(reviewId);
    },

    async getReviewsByProduct(productId) {
        return await ReviewRepository.getReviewsByProduct(productId);
    },

    async getReviewsByServiceProvider(serviceProviderId) {
        return await ReviewRepository.getReviewsByServiceProvider(serviceProviderId);
    },

    async getReviewsByCustomer(customerId) {
        return await ReviewRepository.getReviewsByCustomer(customerId);
    },

    async deleteReview(reviewId) {
        return await ReviewRepository.deleteReview(reviewId);
    }
};

module.exports = ReviewService;