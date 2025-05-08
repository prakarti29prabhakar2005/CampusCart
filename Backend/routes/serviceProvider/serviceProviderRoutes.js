const express = require("express");
const router = express.Router();
const serviceProviderService = require("../../serviceProvider/services/serviceProviderService");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.put("/update/:id", upload.single("profilePicture"), async (req, res) => {
  try {
    const { name, email, address, description, services } = req.body;
    const profilePicture = req.file ? req.file.path : null;

    const updatedData = {
      name,
      email,
      address,
      description,
      services: services ? services.split(",") : [],
      profilePicture,
    };

    const updatedProvider = await serviceProviderService.updateServiceProvider(
      req.params.id,
      updatedData
    );

    if (!updatedProvider) {
      return res.status(400).json({ message: "ServiceProvider not found" });
    }

    res.status(200).json(updatedProvider);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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
