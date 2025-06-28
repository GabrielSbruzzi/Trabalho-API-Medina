const request = require('supertest');
const express = require('express');
const userRoutes = require('../routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

describe('Usuários API', () => {
  let userId;

  it('deve criar um usuário', async () => {
    const res = await request(app).post('/users').send({
      nome: 'Gabriel Medina',
      email: 'medina@email.com',
      senha: '123456'
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    userId = res.body.id;
  });

  it('deve listar usuários', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('deve buscar usuário por ID', async () => {
    const res = await request(app).get(`/users/${userId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toBe(userId);
  });

  it('deve atualizar usuário', async () => {
    const res = await request(app).put(`/users/${userId}`).send({ nome: 'Gabriel Medina' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.nome).toBe('Gabriel Medina');
  });

  it('deve deletar usuário', async () => {
    const res = await request(app).delete(`/users/${userId}`);
    expect(res.statusCode).toEqual(200);
  });

  it('deve retornar 404 ao buscar usuário inexistente', async () => {
    const res = await request(app).get('/users/9999');
    expect(res.statusCode).toEqual(404);
  });
});
