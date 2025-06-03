// server.js
const express = require('express');
const taskService = require('./service/taskService'); // Importa o serviço de tarefas
console.log('Caminho real do taskService carregado:', require.resolve('./service/taskService')); // <--- ADICIONE ESTA LINHA!
const app = express();
const port = 3000; // Porta do seu servidor

// Middleware para lidar com CORS (permitir requisições de outras origens)
const cors = require('cors');
app.use(cors());

// Middleware para analisar corpos de requisição JSON
app.use(express.json());

// --- ROTAS DA API PARA A ENTIDADE "TAREFAS" ---

// 1. GET ALL: Obter todas as tarefas
// Rota: GET /tarefas
app.get('/tarefas', (req, res) => {
    const tasks = taskService.getAllTasks();
    res.status(200).json(tasks);
});

// 2. GET BY ID: Obter uma tarefa específica por ID
// Rota: GET /tarefas/:id
app.get('/tarefas/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID da tarefa inválido. Deve ser um número.' });
        }
        const task = taskService.getTaskById(id);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: 'Tarefa não encontrada' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// 3. CREATE: Criar uma nova tarefa
// Rota: POST /tarefas
app.post('/tarefas', (req, res) => {
    try {
        const newTaskData = req.body;
        const newTask = taskService.createTask(newTaskData);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// 4. UPDATE: Atualizar uma tarefa existente por ID
// Rota: PUT /tarefas/:id
app.put('/tarefas/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID da tarefa inválido para atualização. Deve ser um número.' });
        }
        const updatedTaskData = req.body;
        const updatedTask = taskService.updateTask(id, updatedTaskData);
        if (updatedTask) {
            res.status(200).json(updatedTask);
        } else {
            res.status(404).json({ message: 'Tarefa não encontrada para atualização' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// 5. DELETE: Excluir uma tarefa por ID
// Rota: DELETE /tarefas/:id
app.delete('/tarefas/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID da tarefa inválido para exclusão. Deve ser um número.' });
        }
        const success = taskService.deleteTask(id);
        if (success) {
            res.status(204).send(); // 204 No Content para exclusão bem-sucedida
        } else {
            res.status(404).json({ message: 'Tarefa não encontrada para exclusão' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Rota base (para verificar se o servidor está online)
app.get('/', (req, res) => {
    res.send('Servidor Express funcionando! APIs de Tarefas disponíveis em /tarefas');
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log('Endpoints de tarefas disponíveis: /tarefas');
});