# 📌 API de Usuários e Tarefas


## 👤 Usuários

### 1. Crie um usuário

**Método:** POST
**URL:** `http://localhost:3000/users`
**Body (JSON):**

{
  "nome": "Gabriel Medina",
  "email": "medina@email.com",
  "senha": "123456"
}

---

### 2. Liste todos os usuários

**Método:** GET
**URL:** `http://localhost:3000/users`
**Headers:**
---

### 3. Liste um usuário por ID

**Método:** GET
**URL:** `http://localhost:3000/users/ID_DO_USUARIO`
**Headers:**
---

### 4. Atualize um usuário

**Método:** PUT
**URL:** `http://localhost:3000/users/ID_DO_USUARIO`
**Headers:**
**Body (JSON):**

```json
{
  "nome": "Gabriel Atualizado",
  "email": "novo@email.com",
  "senha": "novaSenha123"
}
```

---

### 5. Delete um usuário

**Método:** DELETE
**URL:** `http://localhost:3000/users/ID_DO_USUARIO`
**Headers:**
---

## 📝 Tarefas

### 1. Crie uma tarefa

**Método:** POST
**URL:** `http://localhost:3000/tasks`
**Headers:**
**Body (JSON):**

```json
{
  "nome": "Estudar Node.js",
  "descricao": "Praticar com autenticação JWT",
  "usuarioId": "ID_DO_USUARIO"
}
```

---

### 2. Liste todas as tarefas de um usuário

**Método:** GET
**URL:** `http://localhost:3000/tasks?usuarioId=ID_DO_USUARIO`
**Headers:**
---

### 3. Liste uma tarefa por ID

**Método:** GET
**URL:** `http://localhost:3000/tasks/ID_DA_TAREFA`
**Headers:**
---

### 4. Atualize uma tarefa

**Método:** PUT
**URL:** `http://localhost:3000/tasks/ID_DA_TAREFA`
**Headers:**
**Body (JSON):**

```json
{
  "nome": "Estudar Node.js - Atualizado",
  "descricao": "Aprimorar rotas protegidas com JWT"
}
```

---

### 5. Delete uma tarefa

**Método:** DELETE
**URL:** `http://localhost:3000/tasks/ID_DA_TAREFA`
**Headers:**