const UserRepository = require('../repository/userRepository');

const User= {
    async createUser(userData) {
        return await UserRepository.createUser(userData);
    },

    async getUserById(userId) {
        return await UserRepository.getUserById(userId);
    },

    async getUserByEmail(email) {
        return await UserRepository.getUserByEmail(email);
    },

    async updateUser(userId, updatedData) {
        return await UserRepository.updateUser(userId, updatedData);
    },

    async deleteUser(userId) {
        return await UserRepository.deleteUser(userId);
    },

    async getAllUsers() {
        return await UserRepository.getAllUsers();
    }
};

module.exports = User;
