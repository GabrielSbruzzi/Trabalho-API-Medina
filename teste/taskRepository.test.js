// API/service/taskService.js

// Supondo que taskRepository está sendo importado aqui
const taskRepository = require('../repository/taskRepository'); 

exports.updateTask = (id, taskData) => {
  const taskId = parseInt(id);
  if (isNaN(taskId)) {
    throw new Error('ID da tarefa inválido para atualização. Deve ser um número.');
  }

  const existingTask = taskRepository.findById(taskId);
  if (!existingTask) {
    return null;
  }

  if (taskData.status && !['pendente', 'em progresso', 'concluída'].includes(taskData.status)) {
    throw new Error('Status da tarefa inválido.');
  }

  return taskRepository.update(taskId, taskData);
};

// --- A ALTERAÇÃO FOI FEITA APENAS NESTA FUNÇÃO ---
exports.deleteTask = (id) => {
  const taskId = parseInt(id);
  if (isNaN(taskId)) {
    throw new Error('ID da tarefa inválido para exclusão. Deve ser um número.');
  }
  // Linha corrigida: de taskRepository.remove para taskRepository.delete
  taskRepository.delete(taskId); // <-- Esta é a linha alterada!
};