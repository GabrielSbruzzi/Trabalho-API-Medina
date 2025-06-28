let tasks = [];
let taskIdCounter = 1;

function listar() {
  return tasks;
}

function inserir(data) {
  const nova = {
    id: taskIdCounter++,
    titulo: data.titulo,
    descricao: data.descricao,
    usuarioId: parseInt(data.usuarioId),
    status: data.status || "pendente" // valor padrão
  };
  tasks.push(nova);
  return nova;
}

function buscarPorId(id) {
  return tasks.find(t => t.id === parseInt(id));
}

function atualizar(id, data) {
  const task = tasks.find(t => t.id === parseInt(id));
  if (!task) return null;

  task.titulo = data.titulo || task.titulo;
  task.descricao = data.descricao || task.descricao;
  task.usuarioId = data.usuarioId || task.usuarioId;
  task.status = data.status || task.status;

  return task;
}

function deletar(id) {
  const index = tasks.findIndex(t => t.id === parseInt(id));
  if (index === -1) return null;

  return tasks.splice(index, 1)[0];
}

module.exports = { 
    listar, 
    inserir, 
    buscarPorId, 
    atualizar, 
    deletar 
};
