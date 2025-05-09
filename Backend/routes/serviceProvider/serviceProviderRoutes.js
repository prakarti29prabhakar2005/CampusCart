const express = require("express");
const router = express.Router();
const serviceProviderService = require("../../serviceProvider/services/serviceProviderService");
const ServiceProvider = require("../../db/serviceProviderModel");
const path = require("path");

router.post("/", async (req, res) => {
  try {
    const serviceProvider = await serviceProviderService.createServiceProvider(
      req.body
    );
    res.status(200).json(serviceProvider);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/service-providers/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const serviceProvider = await ServiceProvider.findOne({ email });

    if (!serviceProvider || serviceProvider.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json(serviceProvider);
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const serviceProviders =
      await serviceProviderService.getAllServiceProviders();
    res.status(200).json(serviceProviders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const serviceProvider = serviceProviderService.getServiceProviderById(
      req.params.id
    );
    if (!serviceProvider) {
      return res.status(400).json({ message: "ServiceProvider not found" });
    }
    res.status(200).json(serviceProvider);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
