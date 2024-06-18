// Rotas de verificação de senha
const express = require('express')
const router = express.Router()
const senhaController = require('../controllers/senhaController')

// Rota para verificar senha
router.post('/verificar-forca', senhaController.verificarForcaSenha)

module.exports = router