// CyberJunin_back/src/services/virusTotalService.js
const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.VIRUSTOTAL_API_KEY;
const BASE_URL = 'https://www.virustotal.com/api/v3/urls';
const ANALYSIS_URL = 'https://www.virustotal.com/api/v3/analyses/';

const scanURL = async (url) => {
  try {
    const response = await axios.post(
      BASE_URL,
      new URLSearchParams({ url: url }).toString(),
      {
        headers: {
          'accept': 'application/json',
          'x-apikey': API_KEY,
          'content-type': 'application/x-www-form-urlencoded'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao escanear URL:', error);
    throw error;
  }
};

const getAnalysisReport = async (id) => {
  try {
    const response = await axios.get(
      `${ANALYSIS_URL}${id}`,
      {
        headers: {
          'accept': 'application/json',
          'x-apikey': API_KEY
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao obter relatório de análise:', error);
    throw error;
  }
};

module.exports = { scanURL, getAnalysisReport };