const userService = require('../service/userService');

function listar(req, res) {
  const users = userService.listar();
  res.json(users);
}

function inserir(req, res) {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    return res.status(400).json({ msg: "Usuário com dados inválidos" });
  }

  const user = userService.inserir(req.body);
  res.status(201).json(user);
}

function buscarPorId(req, res) {
  const user = userService.buscarPorId(req.params.id);
  if (!user) {
    return res.status(404).json({ msg: 'Usuário não encontrado' });
  }
  res.json(user);
}

function atualizar(req, res) {
  const user = userService.atualizar(req.params.id, req.body);
  if (!user) {
    return res.status(404).json({ msg: 'Usuário não encontrado para atualizar' });
  }
  res.json(user);
}

function deletar(req, res) {
  const user = userService.deletar(req.params.id);
  if (!user) {
    return res.status(404).json({ msg: 'Usuário não encontrado para deletar' });
  }
  res.json(user);
}

module.exports = { 
  listar, 
  inserir, 
  buscarPorId, 
  atualizar, 
  deletar 
};
