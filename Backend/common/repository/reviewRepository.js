const Review = require('../db/reviewModel');

const ReviewRepository = {
    async createReview(reviewData) {
        return await Review.create(reviewData);
    },

    async getReviewById(reviewId) {
        return await Review.findById(reviewId).populate("customerId serviceProviderId productId");
    },

    async getAllReviews() {
        return await Review.find().populate("customerId serviceProviderId productId");
    },

    async getReviewsByProductId(productId) {
        return await Review.find({ productId }).populate("customerId serviceProviderId");
    },

    async getReviewsByServiceProviderId(serviceProviderId) {
        return await Review.find({ serviceProviderId }).populate("customerId productId");
    },

    async updateReview(reviewId, updatedData) {
        return await Review.findByIdAndUpdate(reviewId, updatedData, { new: true });
    },

    async deleteReview(reviewId) {
        return await Review.findByIdAndDelete(reviewId);
    }
}

module.exports = ReviewRepository;