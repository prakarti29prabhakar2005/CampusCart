const mongoose = require("mongoose");

const ServiceProviderSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  description: String,
  services: [String],
});

module.exports = mongoose.model("ServiceProvider", ServiceProviderSchema);
