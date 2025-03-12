const express = require("express");
const router = express.Router();
const ServiceProvider = require("../models/ServiceProvider");

router.post("/add", async (req, res) => {
  try {
    const newProvider = new ServiceProvider(req.body);
    await newProvider.save();
    res.json({ message: "Service Provider Added", provider: newProvider });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
