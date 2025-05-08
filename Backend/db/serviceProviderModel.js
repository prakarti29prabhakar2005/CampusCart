const mongoose = require("mongoose");

const ServiceProviderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  description: { type: String },
  services: { type: [String], default: [] },
  profilePicture: { type: String },
});

module.exports = mongoose.model("ServiceProvider", ServiceProviderSchema);
