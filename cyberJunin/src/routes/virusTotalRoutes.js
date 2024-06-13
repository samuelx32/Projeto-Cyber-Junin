// CyberJunin_back/src/routes/virusTotalRoutes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const virusTotalController = require('../controllers/virusTotalController');

const router = express.Router();

// Configurar multer para armazenar arquivos na pasta 'uploads'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

// Rota para escanear URLs
router.post('/scan-url', virusTotalController.scanURL);

// Rota para escanear arquivos
router.post('/scan-file', upload.single('file'), virusTotalController.scanFile);

// Rota para obter relatório de análise
router.get('/report/:id', virusTotalController.getAnalysisReport);

module.exports = router;
