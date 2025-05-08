const User = require('../db/userModel');

const UserRepository = {
    async createUser(userData) {
        return await User.create(userData);
    },

    async getUserById(userId) {
        return await User.findById(userId);
    },

    async getUserByEmail(email) {
        return await User.findOne({ email });
    },

    async updateUser(userId, updatedData) {
        return await User.findByIdAndUpdate(userId, updatedData, { new: true });
    },

    async deleteUser(userId) {
        return await User.findByIdAndDelete(userId);
    },

    async getAllUsers() {
        return await User.find();
    }
}

module.exports = UserRepository;
