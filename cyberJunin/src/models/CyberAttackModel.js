const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const CyberAttack = sequelize.define('CyberAttack', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    commonMedium: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    targetAudience: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    identificationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    prevention: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    impact: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'cyber_attacks',
    timestamps: true,
});

module.exports = CyberAttack;
