const express = require('express')
const router = express.Router()
const CyberAttackController = require('../controllers/CyberAttackController')

router.post('/', CyberAttackController.createCyberAttack)
router.get('/', CyberAttackController.getAllCyberAttacks)
router.get('/:id', CyberAttackController.getCyberAttackById)
router.put('/:id', CyberAttackController.updateCyberAttack)
router.delete('/:id', CyberAttackController.deleteCyberAttack)

module.exports = router