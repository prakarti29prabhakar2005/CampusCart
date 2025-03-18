const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
const ServiceProviderSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  services: [String],
});

module.exports = mongoose.model("ServiceProvider", ServiceProviderSchema);
