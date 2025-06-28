const taskService = require('../service/taskService');

function listar(req, res) {
  const tasks = taskService.listar();
  res.json(tasks);
}

function inserir(req, res) {
  const { titulo, descricao, usuarioId, status } = req.body;

  if (!titulo || !descricao || !usuarioId) {
    return res.status(400).json({ msg: "Tarefa com dados inválidos" });
  }

  const task = taskService.inserir({ titulo, descricao, usuarioId, status });
  res.status(201).json(task);
}

function buscarPorId(req, res) {
  const task = taskService.buscarPorId(req.params.id);
  if (!task) {
    return res.status(404).json({ msg: 'Tarefa não encontrada' });
  }
  res.json(task);
}

function atualizar(req, res) {
  const task = taskService.atualizar(req.params.id, req.body);
  if (!task) {
    return res.status(404).json({ msg: 'Tarefa não encontrada para atualizar' });
  }
  res.json(task);
}

function deletar(req, res) {
  const task = taskService.deletar(req.params.id);
  if (!task) {
    return res.status(404).json({ msg: 'Tarefa não encontrada para deletar' });
  }
  res.json(task);
}

module.exports = { 
  listar, 
  inserir, 
  buscarPorId, 
  atualizar,
  deletar 
  };
