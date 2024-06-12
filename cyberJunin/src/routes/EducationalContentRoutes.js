const express = require('express');
const router = express.Router();
const educationalContentController = require('../controllers/EducationalContentController');

// Rota para buscar todos os conteúdos educacionais
router.get('/', educationalContentController.getAllContents);

// Rota para buscar um conteúdo educacional por ID
router.get('/:id', educationalContentController.getContentById);

// Rota para criar um novo conteúdo educacional
router.post('/', educationalContentController.createContent);

// Rota para atualizar um conteúdo educacional
router.put('/:id', educationalContentController.updateContent);

// Rota para deletar um conteúdo educacional
router.delete('/:id', educationalContentController.deleteContent);

module.exports = router;
