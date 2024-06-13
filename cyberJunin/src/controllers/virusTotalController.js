// CyberJunin_back/src/controllers/virusTotalController.js
const { scanURL, scanFile, getAnalysisReport } = require('../services/virusTotalService');
const path = require('path');
const fs = require('fs');

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

exports.scanFile = async (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: 'Nenhum arquivo enviado' });
  }

  const filePath = path.join(__dirname, '../uploads', file.filename);

  try {
    const scanResult = await scanFile(filePath);
    fs.unlinkSync(filePath); // Apaga o arquivo local após o upload
    const analysisId = scanResult.data.id;
    // Espera alguns segundos antes de obter o relatório
    await new Promise(resolve => setTimeout(resolve, 5000));
    const report = await getAnalysisReport(analysisId);
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao escanear arquivo ou obter relatório' });
  }
};

exports.getAnalysisReport = async (req, res) => {
  const { id } = req.params;

  try {
    const report = await getAnalysisReport(id);
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter relatório de análise' });
  }
};
