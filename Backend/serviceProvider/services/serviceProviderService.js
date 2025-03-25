const ServiceProviderRepository = require('../repository/serviceProviderRepository');

const ServiceProviderService = {
    async createServiceProvider(serviceProviderData) {
        // account created mail
        return await ServiceProviderRepository.createServiceProvider(serviceProviderData);
    },

    async getServiceProviderById(serviceProviderId) {
        return await ServiceProviderRepository.getServiceProviderById(serviceProviderId);
    },

    async updateServiceProvider(serviceProviderId, updatedData) {
        return await ServiceProviderRepository.updateServiceProvider(serviceProviderId, updatedData);
    },

    async deleteServiceProvider(serviceProviderId) {
        // account deactivate mail
        return await ServiceProviderRepository.deleteServiceProvider(serviceProviderId);
    },

    async getAllServiceProviders() {
        return await ServiceProviderRepository.getAllServiceProviders();
    }
};

module.exports = ServiceProviderService;