// Serviço para lidar com a lógica de negócios de publicações
const Usuario = require('../models/UsuarioContentModel')

const createPost = async (data) => {
    return await Usuario.create(data)
}

const getAllPosts = async () => {
    return await Usuario.findAll()
}

const getPostById = async (id) => {
    return await Usuario.findByPk(id)
}

const updatePost = async (id, data) => {
    await Usuario.updatePost(data, { where: { id } })
    return await Usuario.findByPk(id)
}

const deletePost = async (id) => {
    return await Usuario.destroy({ where: { id } })
}

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost
}