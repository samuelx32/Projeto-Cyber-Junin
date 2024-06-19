// Controlador para gerenciar requisições para publicações
const usuarioService = require('../services/UsuarioContentService')

exports.createPost = async (req, res) => {
    try {
        console.log('Recebido dados para criar post:', req.body); // Log para verificar os dados recebidos
        const post = await usuarioService.createPost(req.body);
        res.status(201).json(post);
    } catch (error) {
        console.error('Erro ao criar post:', error); // Log do erro
        res.status(500).json({ error: 'Erro ao criar post.' });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await usuarioService.getAllPosts()
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar posts.' })
    }
}

exports.getPostById = async (req, res) => {
    try {
        const post = await usuarioService.getPostById(req.params.id)
        if (!post) {
            return res.status(404).json({ error: 'Post não encontrado na base.' })
        }
        res.status(201).json(post)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar post.' })
    }
}

exports.updatePost = async (req, res) => {
    try {
        const post = await usuarioService.updatePost(req.params.id, req.body)
        if (!post) {
            return res.status(404).json({ error: 'Post não encontrado.' })
        }
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar post.' })
    }
}

exports.deletePost = async (req, res) => {
    try {
        await usuarioService.deletePost(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar post.' })
    }
}


