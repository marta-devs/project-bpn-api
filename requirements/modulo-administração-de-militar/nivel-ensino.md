### 🧩 Funcionalidade: Editar nível de ensino por ID

```gherkin
Funcionalidade: Editar nível de ensino por ID

  Contexto:
    Dado que o usuário está autenticado
    E possui uma das funções: "adm", "gestor" ou "operador"

  Cenário: Editar nível de ensino com sucesso
    Quando o usuário envia dados válidos para um nível de ensino existente
    Então o sistema deve retornar status 203
    E a mensagem "Nível de ensino atualizado com sucesso"

  Cenário: Nível de ensino com ID inexistente
    Quando o usuário tenta editar um nível de ensino com ID inválido
    Então o sistema deve retornar status 404
    E a mensagem "Nível de ensino não encontrado"
```

---

### 🧩 Funcionalidade: Buscar todos os níveis de ensino

```gherkin
Funcionalidade: Buscar todos os níveis de ensino

  Contexto:
    Dado que o usuário está autenticado
    E possui uma das funções: "adm", "gestor" ou "operador"

  Cenário: Listar todos os níveis de ensino
    Quando o usuário faz a requisição de listagem
    Então o sistema deve retornar status 200
    E a lista de níveis de ensino cadastrados
```

---

### 🧩 Funcionalidade: Buscar nível de ensino por ID

```gherkin
Funcionalidade: Buscar nível de ensino por ID

  Contexto:
    Dado que o usuário está autenticado
    E possui uma das funções: "adm", "gestor" ou "operador"

  Cenário: Buscar nível de ensino existente por ID
    Quando o usuário informa um ID válido
    Então o sistema deve retornar status 200
    E os dados do nível de ensino correspondente

  Cenário: Nível de ensino com ID inexistente
    Quando o usuário informa um ID inválido
    Então o sistema deve retornar status 404
    E a mensagem "Nível de ensino não encontrado"
```
