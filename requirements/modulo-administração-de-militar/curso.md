### 🧩 Funcionalidade: Adicionar curso

```gherkin
Funcionalidade: Adicionar curso

  Contexto:
    Dado que o usuário está autenticado
    E possui uma das funções: "adm", "gestor" ou "operador"

  Cenário: Adicionar curso com sucesso
    Quando o usuário envia os dados válidos e únicos
    Então o sistema deve retornar status 200
    E a mensagem "Curso adicionado com sucesso"

  Cenário: Curso com nome duplicado
    Quando o usuário tenta adicionar um curso com um nome já existente
    Então o sistema deve retornar status 409
    E a mensagem "Já existe um curso com esse nome"

  Cenário: Campos obrigatórios ausentes ou inválidos
    Quando o usuário envia dados incompletos ou inválidos
    Então o sistema deve retornar status 400
    E a mensagem "Campos obrigatórios inválidos ou ausentes"
```

---

### 🧩 Funcionalidade: Editar curso

```gherkin
Funcionalidade: Editar curso

  Contexto:
    Dado que o usuário está autenticado
    E possui uma das funções: "adm", "gestor" ou "operador"

  Cenário: Editar curso com sucesso
    Quando o usuário envia dados válidos para um curso existente
    Então o sistema deve retornar status 200
    E a mensagem "Curso atualizado com sucesso"

  Cenário: Curso não encontrado
    Quando o usuário tenta editar um curso com ID inexistente
    Então o sistema deve retornar status 404
    E a mensagem "Curso não encontrado"

  Cenário: Nome do curso duplicado
    Quando o usuário tenta atualizar um curso para um nome que já existe
    Então o sistema deve retornar status 409
    E a mensagem "Já existe um curso com esse nome"

  Cenário: Campos obrigatórios inválidos
    Quando o usuário envia dados incompletos ou inválidos
    Então o sistema deve retornar status 400
    E a mensagem "Campos obrigatórios inválidos ou ausentes"
```

---

### 🧩 Funcionalidade: Remover curso

```gherkin
Funcionalidade: Remover curso

  Contexto:
    Dado que o usuário está autenticado
    E possui uma das funções: "adm", "gestor" ou "operador"

  Cenário: Remoção de curso com sucesso
    Quando o usuário informa um ID válido
    Então o sistema deve retornar status 203
    E a mensagem "Curso removido com sucesso"

  Cenário: Curso com ID inexistente
    Quando o usuário tenta remover um curso com ID inválido
    Então o sistema deve retornar status 404
    E a mensagem "Curso não encontrado"
```

---

### 🧩 Funcionalidade: Buscar todos os cursos

```gherkin
Funcionalidade: Buscar todos os cursos

  Contexto:
    Dado que o usuário está autenticado
    E possui uma das funções: "adm", "gestor" ou "operador"

  Cenário: Listar todos os cursos
    Quando o usuário faz a requisição de listagem
    Então o sistema deve retornar status 200
    E a lista de cursos cadastrados
```

---

### 🧩 Funcionalidade: Buscar curso por ID

```gherkin
Funcionalidade: Buscar curso por ID

  Contexto:
    Dado que o usuário está autenticado
    E possui uma das funções: "adm", "gestor" ou "operador"

  Cenário: Buscar curso existente por ID
    Quando o usuário informa um ID válido
    Então o sistema deve retornar status 200
    E os dados do curso correspondente

  Cenário: Curso com ID inexistente
    Quando o usuário informa um ID inválido
    Então o sistema deve retornar status 404
    E a mensagem "Curso não encontrado"
```

---

### 🧩 Funcionalidade: Buscar curso por nome

```gherkin
Funcionalidade: Buscar curso por nome

  Contexto:
    Dado que o usuário está autenticado
    E possui uma das funções: "adm", "gestor" ou "operador"

  Cenário: Buscar curso por nome existente
    Quando o usuário informa um nome válido de curso
    Então o sistema deve retornar status 200
    E os dados do curso correspondente

  Cenário: Nome do curso inexistente
    Quando o usuário informa um nome que não existe
    Então o sistema deve retornar status 404
    E a mensagem "Curso não encontrado"
```
