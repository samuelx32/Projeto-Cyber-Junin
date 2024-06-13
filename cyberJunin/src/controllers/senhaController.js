// Controller de verificação de senhas
const { verificarForcaSenha } = require('../services/senhaService')

// Função para lidar com a rota de verificação
exports.verificarSenha = (req, res) => {
    const { senha } = req.body;

    try{
        const resultado = verificarForcaSenha(senha)
        console.log(resultado)
        res.status(200).json({forca: resultado})
    } catch {
        console.error('Erro ao verificar força de senha:', error)
        res.status(500).json({error:'Erro ao verificar força da senha.'})
    }
}