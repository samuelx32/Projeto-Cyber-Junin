// Modelo a ser utilizado para as publicações

const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')


const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
})

module.exports = {
    Post
}