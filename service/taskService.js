// service/taskService.js
const taskRepository = require('../repository/taskRepository'); // Importa o repositório

exports.getAllTasks = () => {
    return taskRepository.findAll();
};

exports.getTaskById = (id) => {
    const taskId = parseInt(id);
    if (isNaN(taskId)) {
        throw new Error('ID da tarefa inválido. Deve ser um número.');
    }
    return taskRepository.findById(taskId);
};

exports.createTask = (taskData) => {
    if (!taskData || typeof taskData.title !== 'string' || taskData.title.trim() === '') {
        throw new new Error('Dados da tarefa inválidos. O título é obrigatório e deve ser uma string não vazia.');
    }
    return taskRepository.create(taskData);
};

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

// --- A ALTERAÇÃO FOI FEITA APENAS AQUI NESTA FUNÇÃO ---
exports.deleteTask = (id) => {
    const taskId = parseInt(id);
    if (isNaN(taskId)) {
        throw new Error('ID da tarefa inválido para exclusão. Deve ser um número.');
    }
    // A linha abaixo foi alterada de 'taskRepository.xyz(taskId)' para 'taskRepository.delete(taskId)'
    taskRepository.delete(taskId); // <--- AGORA ESTÁ CORRETO!
};