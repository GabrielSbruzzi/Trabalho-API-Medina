let users = [];
let userIdCounter = 1;

function listar() {
  return users;
}

function inserir(data) {
  const newUser = {
    id: userIdCounter++,
    nome: data.nome,
    email: data.email,
    senha: data.senha
  };
  users.push(newUser);
  return newUser;
}

function buscarPorId(id) {
  return users.find(u => u.id === parseInt(id));
}

function atualizar(id, data) {
  const user = users.find(u => u.id === parseInt(id));
  if (!user) return null;

  user.nome = data.nome || user.nome;
  user.email = data.email || user.email;
  user.senha = data.senha || user.senha;

  return user;
}

function deletar(id) {
  const index = users.findIndex(u => u.id === parseInt(id));
  if (index === -1) return null;

  const deleted = users.splice(index, 1)[0];
  return deleted;
}

module.exports = { 
    listar, 
    inserir, 
    buscarPorId, 
    atualizar, 
    deletar 
};
