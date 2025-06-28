# 🚀 API RESTful de Usuários e Tarefas

## 📚 Funcionalidades

- ✅ Cadastro de usuários
- ✅ CRUD completo de usuários (Create, Read, Update, Delete)
- ✅ CRUD completo de tarefas (Create, Read, Update, Delete)
- ✅ Campo de status nas tarefas: `pendente`, `em andamento`, `concluída`

> Os dados ficam em memória enquanto o servidor está rodando.

---

## 📦 Instalação e execução

1. Clone o repositório:

```bash
git clone https://github.com/GabrielSbruzzi/Trabalho-API-Medina.git
````

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
node server.js
```

O servidor será iniciado em `http://localhost:3000`.

---

## ✉️ Endpoints principais

### 👤 Usuários

* `POST /users` → Cria novo usuário
* `GET /users` → Lista todos os usuários
* `GET /users/:id` → Busca usuário por ID
* `PUT /users/:id` → Atualiza um usuário
* `DELETE /users/:id` → Remove um usuário

---

### ✅ Tarefas

* `POST /tasks` → Cria nova tarefa (com status)
* `GET /tasks` → Lista todas as tarefas
* `GET /tasks/:id` → Busca uma tarefa específica
* `PUT /tasks/:id` → Atualiza uma tarefa
* `DELETE /tasks/:id` → Remove uma tarefa

---

## 📝 Observações

* As tarefas têm um campo `status` com valor padrão `"pendente"` caso não seja informado.
* Os dados são perdidos ao reiniciar o servidor
