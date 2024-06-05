// CyberJunin_back/src/controllers/virusTotalController.js
const { scanURL, getAnalysisReport } = require('../services/virusTotalService');

exports.scanURL = async (req, res) => {
  const { url } = req.body;
  try {
    const scanResult = await scanURL(url);
    const analysisId = scanResult.data.id;
    // Espera alguns segundos antes de obter o relatório
    await new Promise(resolve => setTimeout(resolve, 5000));
    const report = await getAnalysisReport(analysisId);
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao escanear URL ou obter relatório' });
  }
};