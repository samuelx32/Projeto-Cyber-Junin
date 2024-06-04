// CyberJunin_back/src/routes/virusTotalRoutes.js
const express = require('express');
const { scanURL } = require('../controllers/virusTotalController');
const router = express.Router();

router.post('/scan', scanURL);

module.exports = router;
