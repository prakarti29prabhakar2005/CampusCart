const ReviewRepository = require('../repository/reviewRepository');

const Review= {
    async createReview(reviewData) {
        return await ReviewRepository.createReview(reviewData);
    },

    async getReviewsByProduct(productId) {
        return await ReviewRepository.getReviewsByProduct(productId);
    },

    async getReviewByUserAndProduct(userId, productId) {
        return await ReviewRepository.getReviewByUserAndProduct(userId, productId);
    },

    async deleteReview(reviewId) {
        return await ReviewRepository.deleteReview(reviewId);
    }
};

module.exports = Review;
