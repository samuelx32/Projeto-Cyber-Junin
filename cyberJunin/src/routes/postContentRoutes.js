const express = require('express');
const router = express.Router();
const postController = require('../controllers/postContentController');

// Rota para buscar todos os posts
router.get('/posts', postController.getAllPosts);

// Rota para buscar um post por ID
router.get('/posts/:id', postController.getPostById);

// Rota para criar um novo post
router.post('/posts', postController.createPost);

// Rota para atualizar um post
router.put('/posts/:id', postController.updatePost);

// Rota para deletar um post
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
