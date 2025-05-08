const Review = require('../db/reviewSchema');

const ReviewRepository = {
    async createReview(reviewData) {
        return await Review.create(reviewData);
    },

    async getReviewsByProduct(productId) {
        return await Review.find({ productId }).populate('userId');
    },

    async getReviewByUserAndProduct(userId, productId) {
        return await Review.findOne({ userId, productId });
    },

    async deleteReview(reviewId) {
        return await Review.findByIdAndDelete(reviewId);
    }
};

module.exports = ReviewRepository;
