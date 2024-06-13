const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/db')

const EducationalContent = sequelize.define('EducationalContent', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    publicationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'educational_contents',
    timestamps: true,
});

module.exports = EducationalContent;
