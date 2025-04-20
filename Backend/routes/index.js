const express = require("express");

const paymentRoutes = require("./common/paymentRoutes.js");
const reviewRoutes = require("./common/reviewRoutes.js");
const serviceProviderRoutes = require("./serviceProvider/serviceProviderRoutes.js");
const inventoryRoutes = require("./serviceProvider/inventoryRoutes.js");
const orderRoutes = require("./serviceProvider/orderRoutes.js");
const productRoutes = require("./serviceProvider/productRoutes.js");

const router = express.Router();

// router.use("/payments", paymentRoutes);
router.use("/service-providers", serviceProviderRoutes);
// router.use("/inventory", inventoryRoutes);
router.use("/orders", orderRoutes);
router.use("/products", productRoutes);

module.exports = router;