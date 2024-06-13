const { verificarForcaSenha } = require('../services/senhaService');

// Função para lidar com a rota de verificação
exports.verificarForcaSenha = (req, res) => {
    const { senha } = req.body;

    try {
        const resultado = verificarForcaSenha(senha);
        res.status(200).json(resultado);
    } catch (error) {
        console.error('Erro ao verificar força de senha:', error);
        res.status(500).json({ error: 'Erro ao verificar força da senha.' });
    }
};
