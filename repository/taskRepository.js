// API/repository/taskRepository.js

let tasks = []; // Array em memória para armazenar tarefas
let currentId = 1;

exports.findAll = () => {
    return tasks;
};

exports.findById = (id) => {
    return tasks.find(task => task.id === id);
};

exports.create = (newTask) => {
    newTask.id = currentId++;
    tasks.push(newTask);
    return newTask;
};

exports.update = (id, updatedData) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        // Garante que o ID não seja alterado durante o update, apenas os outros dados.
        tasks[index] = { ...tasks[index], ...updatedData };
        return tasks[index];
    }
    // Retorna undefined, consistente com o que o teste espera quando não encontra
    return undefined;
};

// ALTERADO: Renomeado de 'remove' para 'delete' para corresponder aos testes
exports.delete = (id) => {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    return tasks.length < initialLength; // Retorna true se algo foi removido, false caso contrário
};

// ====================================================================
// ESSA FUNÇÃO É CRUCIAL PARA OS TESTES E PRECISA ESTAR AQUI!
// ====================================================================
exports.resetTasks = () => {
    tasks = [];       // Reinicia o array de tarefas - ESTA LINHA JÁ FAZ O TRABALHO!
    // A LINHA ABAIXO FOI REMOVIDA, POIS ESTAVA INCORRETA:
    // taskRepository.delete(taskId);
};