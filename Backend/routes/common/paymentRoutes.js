const express = require('express');
const router = express.Router();

// Example payment route
router.get('/test', (req, res) => {
    res.send('Payment route is working!');
});

module.exports = router;
