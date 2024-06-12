const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/UsuarioContentController');

// Rota para buscar todos os posts
router.get('/', usuarioController.getAllPosts);

// Rota para buscar um post por ID
router.get('/:id', usuarioController.getPostById);

// Rota para criar um novo post
router.post('/', usuarioController.createPost);

// Rota para atualizar um post
router.put('/:id', usuarioController.updatePost);

// Rota para deletar um post
router.delete('/:id', usuarioController.deletePost);

module.exports = router;
