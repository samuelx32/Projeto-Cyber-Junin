const CyberAttackService = require('../services/CyberAttackService')

exports.createCyberAttack = async (req, res) => {
    try{
        console.log('Dados recebidos para cadastro de golpe:', req.body)
        const cyberAttack = await CyberAttackService.createCyberAttack(req.body)
        res.status(201).json(cyberAttack)
    } catch (error){
        console.error('Erro ao cadastrar golpe:', error)
        res.status(500).json({error: 'Erro ao criar post.'})
    }
}

exports.getAllCyberAttacks = async (req, res) => {
    try{
        const cyberAttacks = await CyberAttackService.getAllCyberAttacks(req.body)
        res.status(200).json(cyberAttacks)
    } catch (error){
        console.error('Erro ao buscar pelos golpes:', error)
        res.status(500).json({error: 'Erro ao buscar golpes cadastrados.'})
    }
}

exports.getCyberAttackById = async (req, res) => {
    try{
        const cyberAttack = await CyberAttackService.getCyberAttackById(req.params.id)
        if (!cyberAttack) {
            return res.status(404).json({error: 'Golpe cibernético não encontrado.'})
        }
        res.status(200).json(cyberAttack)
    } catch (error) {
        res.status(500).json({error: "Erro ao buscar golpe."})
    }
}

exports.updateCyberAttack = async (req, res) => {
    try {
        const cyberAttack = await cyberAttackService.updateCyberAttack(req.params.id, req.body);
        if (!cyberAttack) {
            return res.status(404).json({ error: 'Golpe cibernético não encontrado.' });
        }
        res.status(200).json(cyberAttack);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar golpe cibernético.' });
    }
}

exports.deleteCyberAttack = async (req, res) => {
    try {
        await cyberAttackService.deleteCyberAttack(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar golpe cibernético.' });
    }
}
