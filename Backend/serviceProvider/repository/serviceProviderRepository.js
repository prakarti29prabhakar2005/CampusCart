const ServiceProvider = require('../../db/serviceProviderModel');

const ServiceProviderRepository = {
    async createServiceProvider(serviceProviderData) {
        return await ServiceProvider.create(serviceProviderData);
    },

    async getServiceProviderById(serviceProviderId) {
        return await ServiceProvider.findById(serviceProviderId);
    },

    async updateServiceProvider(serviceProviderId, updatedData) {
        return await ServiceProvider.findByIdAndUpdate(serviceProviderId, updatedData, {new: true});
    },

    async deleteServiceProvider(serviceProviderId) {
        return await ServiceProvider.findByIdAndDelete(serviceProviderId);
    },

    async getAllServiceProviders() {
        return await ServiceProvider.find();
    }
}

module.exports = ServiceProviderRepository;