const EducationalContent = require('../models/EducationalContentModel')

const createContent = async (data) => {
    return await EducationalContent.create(data);
};

const getAllContents = async () => {
    return await EducationalContent.findAll();
};

const getContentById = async (id) => {
    return await EducationalContent.findByPk(id);
};

const updateContent = async (id, data) => {
    await EducationalContent.update(data, { where: { id } });
    return await EducationalContent.findByPk(id);
};

const deleteContent = async (id) => {
    return await EducationalContent.destroy({ where: { id } });
};

module.exports = {
    createContent,
    getAllContents,
    getContentById,
    updateContent,
    deleteContent,
};