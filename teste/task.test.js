const request = require('supertest');
const express = require('express');
const taskRoutes = require('../routes/taskRoutes');
const userRoutes = require('../routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

describe('Tarefas API', () => {
  let userId;
  let taskId;

  beforeAll(async () => {
    const res = await request(app).post('/users').send({
      nome: 'Gabriel Medina',
      email: 'medina@email.com',
      senha: 'senha'
    });
    userId = res.body.id;
  });

  it('deve criar uma tarefa', async () => {
    const res = await request(app).post('/tasks').send({
      titulo: 'Estudar Insomnia',
      descricao: 'Praticar os testes na insomnia',
      usuarioId: userId
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    taskId = res.body.id;
  });

  it('deve listar tarefas', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('deve buscar tarefa por ID', async () => {
    const res = await request(app).get(`/tasks/${taskId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toBe(taskId);
  });

  it('deve atualizar tarefa', async () => {
    const res = await request(app).put(`/tasks/${taskId}`).send({ titulo: 'Estudar sobre Testes' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.titulo).toBe('Estudar sobre Testes');
  });

  it('deve deletar tarefa', async () => {
    const res = await request(app).delete(`/tasks/${taskId}`);
    expect(res.statusCode).toEqual(200);
  });

  it('deve retornar 404 ao buscar tarefa inexistente', async () => {
    const res = await request(app).get('/tasks/9999');
    expect(res.statusCode).toEqual(404);
  });
});
