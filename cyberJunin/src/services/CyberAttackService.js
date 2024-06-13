const CyberAttack = require('../models/CyberAttackModel')

const createCyberAttack = async (data) => {
    return await CyberAttack.create(data)
}

const getAllCyberAttacks = async () => {
    return await CyberAttack.findAll()
}

const getCyberAttackById = async (id) => {
    return await CyberAttack.findByPk(id)
}

const updateCyberAttack = async (id, data) => {
    await CyberAttack.update(data, { where: { id } })
    return await CyberAttack.findByPk(id)
}

const deleteCyberAttack = async (id) => {
    return await CyberAttack.destroy({ where: { id } })
}


module.exports = {
    createCyberAttack,
    getAllCyberAttacks,
    getCyberAttackById,
    updateCyberAttack,
    deleteCyberAttack
}