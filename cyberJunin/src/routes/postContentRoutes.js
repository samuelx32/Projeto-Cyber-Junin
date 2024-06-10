const express = require('express');
const router = express.Router();
const postController = require('../controllers/postContentController');

// Rota para buscar todos os posts
router.get('/', postController.getAllPosts);

// Rota para buscar um post por ID
router.get('/:id', postController.getPostById);

// Rota para criar um novo post
router.post('/', postController.createPost);

// Rota para atualizar um post
router.put('/:id', postController.updatePost);

// Rota para deletar um post
router.delete('/:id', postController.deletePost);

module.exports = router;
