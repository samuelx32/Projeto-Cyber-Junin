const educationalContentService = require('../services/EducationalContentService');

exports.createContent = async (req, res) => {
    try {
        const content = await educationalContentService.createContent(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar conteúdo educacional.' });
    }
};

exports.getAllContents = async (req, res) => {
    try {
        const contents = await educationalContentService.getAllContents();
        res.status(200).json(contents);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar conteúdos educacionais.' });
    }
};

exports.getContentById = async (req, res) => {
    try {
        const content = await educationalContentService.getContentById(req.params.id);
        if (!content) {
            return res.status(404).json({ error: 'Conteúdo educacional não encontrado.' });
        }
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar conteúdo educacional.' });
    }
};

exports.updateContent = async (req, res) => {
    try {
        const content = await educationalContentService.updateContent(req.params.id, req.body);
        if (!content) {
            return res.status(404).json({ error: 'Conteúdo educacional não encontrado.' });
        }
        res.status(200).json(content);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar conteúdo educacional.' });
    }
};

exports.deleteContent = async (req, res) => {
    try {
        await educationalContentService.deleteContent(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar conteúdo educacional.' });
    }
};
