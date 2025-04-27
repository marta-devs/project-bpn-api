### 🧩 Funcionalidade: Adicionar histórico

```gherkin
Funcionalidade: Adicionar histórico

  Contexto:
    Dado que o usuário está autenticado
    E possui uma das funções: "adm", "gestor" ou "operador"

  Cenário: Adicionar histórico com sucesso
    Quando o usuário envia um novo histórico válido
    Então o sistema deve retornar status 200
    E a mensagem "Histórico adicionado com sucesso"

  Cenário: Histórico com título duplicado
    Quando o usuário tenta adicionar um histórico com título já existente
    Então o sistema deve retornar status 422
    E a mensagem "Título de histórico já cadastrado"

  Cenário: Militar inexistente
    Quando o usuário tenta adicionar um histórico para um militar inexistente
    Então o sistema deve retornar status 404
    E a mensagem "Militar não encontrado"
```

---

### 🧩 Funcionalidade: Editar histórico

```gherkin
Funcionalidade: Editar histórico

  Contexto:
    Dado que o usuário está autenticado
    E possui uma das funções: "adm", "gestor" ou "operador"

  Cenário: Editar histórico com sucesso
    Quando o usuário envia dados válidos para editar um histórico
    Então o sistema deve retornar status 200
    E a mensagem "Histórico atualizado com sucesso"

  Cenário: Histórico com título duplicado
    Quando o usuário tenta editar um histórico com título já existente
    Então o sistema deve retornar status 422
    E a mensagem "Título de histórico já cadastrado"

  Cenário: Militar inexistente
    Quando o usuário tenta editar um histórico para um militar inexistente
    Então o sistema deve retornar status 404
    E a mensagem "Militar não encontrado"

  Cenário: Histórico com ID inexistente
    Quando o usuário tenta editar um histórico com um ID inexistente
    Então o sistema deve retornar status 404
    E a mensagem "Histórico não encontrado"
```

---

### 🧩 Funcionalidade: Remover histórico

```gherkin
Funcionalidade: Remover histórico

  Contexto:
    Dado que o usuário está autenticado
    E possui uma das funções: "adm", "gestor" ou "operador"

  Cenário: Remover histórico com sucesso
    Quando o usuário envia uma requisição para remover um histórico válido
    Então o sistema deve retornar status 203
    E a mensagem "Histórico removido com sucesso"

  Cenário: ID de histórico inexistente
    Quando o usuário tenta remover um histórico com ID inexistente
    Então o sistema deve retornar status 404
    E a mensagem "Histórico não encontrado"
```

---

### 🧩 Funcionalidade: Buscar todos os históricos

```gherkin
Funcionalidade: Buscar todos os históricos

  Contexto:
    Dado que o usuário está autenticado
    E possui uma das funções: "adm", "gestor" ou "operador"

  Cenário: Listar todos os históricos
    Quando o usuário faz a requisição para listar todos os históricos
    Então o sistema deve retornar status 200
    E a lista de históricos cadastrados
```

---

### 🧩 Funcionalidade: Buscar histórico por ID

```gherkin
Funcionalidade: Buscar histórico por ID

  Contexto:
    Dado que o usuário está autenticado
    E possui uma das funções: "adm", "gestor" ou "operador"

  Cenário: Buscar histórico válido por ID
    Quando o usuário informa um ID válido
    Então o sistema deve retornar status 200
    E os dados do histórico correspondente

  Cenário: ID de histórico inexistente
    Quando o usuário tenta buscar um histórico com ID inexistente
    Então o sistema deve retornar status 404
    E a mensagem "Histórico não encontrado"
```
