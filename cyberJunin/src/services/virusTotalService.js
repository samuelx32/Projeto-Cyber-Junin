// CyberJunin_back/src/services/virusTotalService.js
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
require('dotenv').config();

const API_KEY = process.env.VIRUSTOTAL_API_KEY;
const BASE_URL_URL = 'https://www.virustotal.com/api/v3/urls';
const BASE_URL_FILE = 'https://www.virustotal.com/api/v3/files';
const ANALYSIS_URL = 'https://www.virustotal.com/api/v3/analyses/';

const scanURL = async (url) => {
  try {
    const response = await axios.post(
      BASE_URL_URL,
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

const scanFile = async (filePath) => {
  try {
    const form = new FormData();
    form.append('file', fs.createReadStream(filePath));

    const response = await axios.post(BASE_URL_FILE, form, {
      headers: {
        ...form.getHeaders(),
        'x-apikey': API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao escanear arquivo:', error);
    throw error;
  }
};

const getAnalysisReport = async (id) => {
  try {
    const response = await axios.get(`${ANALYSIS_URL}${id}`, {
      headers: {
        'accept': 'application/json',
        'x-apikey': API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao obter relatório de análise:', error);
    throw error;
  }
};

module.exports = { scanURL, scanFile, getAnalysisReport };
