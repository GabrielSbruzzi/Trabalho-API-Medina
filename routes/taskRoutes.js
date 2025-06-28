const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.listar);
router.post('/', taskController.inserir);
router.get('/:id', taskController.buscarPorId);
router.put('/:id', taskController.atualizar);
router.delete('/:id', taskController.deletar);

module.exports = router;
