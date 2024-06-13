// Serviço para lidar com a lógica de negócios de publicações
const Post = require('../models/PostContentModel')

const createPost = async (data) => {
    return await Post.create(data)
}

const getAllPosts = async () => {
    return await Post.findAll()
}

const getPostById = async (id) => {
    return await Post.findByPk(id)
}

const updatePost = async (id, data) => {
    await Post.update(data, { where: { id } })
    return await Post.findByPk(id)
}

const deletePost = async (id) => {
    return await Post.destroy({ where: { id } })
}

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePost,
    deletePost
}