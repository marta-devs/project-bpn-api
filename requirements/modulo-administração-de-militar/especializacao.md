## Funcionalidade: Adicionar especialização

**Requisitos de acesso:**

- O usuário deve estar autenticado.
- Perfis permitidos: `adm`, `gestor`, `operadores`.

**Cenários:**

### Cenário: Adicionar especialização com sucesso

**Dado** que o usuário está autenticado com perfil permitido  
**E** que o militar informado existe  
**E** que o militar não está com status REMOVIDO ou FALECIDO  
**E** que os campos obrigatórios estão preenchidos, validados e serializados  
**E** que não existe outra especialização com o mesmo nome para este militar  
**Quando** o usuário envia os dados da nova especialização  
**Então** o sistema deve cadastrar a especialização  
**E** retornar status **200 OK**

---

### Cenário: Militar inexistente

**Dado** que o usuário está autenticado com perfil permitido  
**E** que o ID do militar não existe  
**Quando** o usuário tenta adicionar uma especialização  
**Então** deve retornar status **404 Not Found**  
**E** a mensagem: `"Militar não encontrado."`

---

### Cenário: Militar com status inválido

**Dado** que o usuário está autenticado com perfil permitido  
**E** que o militar está com status REMOVIDO ou FALECIDO  
**Quando** o usuário tenta adicionar uma especialização  
**Então** deve retornar status **422 Unprocessable Entity**  
**E** a mensagem: `"Não é possível atribuir especialização ao militar devido ao seu status atual."`

---

### Cenário: Nome duplicado

**Dado** que já existe uma especialização com o mesmo nome para o militar  
**Quando** o usuário tenta adicionar novamente essa especialização  
**Então** deve retornar status **409 Conflict**  
**E** a mensagem: `"Especialização já cadastrada para este militar."`

---

## Funcionalidade: Editar especialização

**Requisitos de acesso:**

- O usuário deve estar autenticado.
- Perfis permitidos: `adm`, `gestor`, `operadores`.

**Cenários:**

### Cenário: Editar especialização com sucesso

**Dado** que o usuário está autenticado com perfil permitido  
**E** que o militar e a especialização existem  
**E** que os dados estão validados e não há duplicidade de nome  
**E** que o militar não está com status REMOVIDO ou FALECIDO  
**Quando** o usuário edita os dados  
**Então** deve retornar a especialização atualizada com status **203 Non-Authoritative Information**

---

### Cenário: Especialização inexistente

**Quando** o usuário tenta editar uma especialização com ID inexistente  
**Então** deve retornar status **404 Not Found**  
**E** a mensagem: `"Especialização não encontrada."`

---

## Funcionalidade: Remover especialização

**Requisitos de acesso:**

- O usuário deve estar autenticado.
- Perfis permitidos: `adm`, `gestor`, `operadores`.

**Cenários:**

### Cenário: Remover especialização com sucesso

**Dado** que o ID informado corresponde a uma especialização existente  
**Quando** o usuário realiza a remoção  
**Então** o sistema deve retornar os dados da especialização removida  
**E** o status **203 Non-Authoritative Information**

---

### Cenário: Especialização não encontrada

**Quando** o usuário tenta remover uma especialização inexistente  
**Então** deve retornar status **404 Not Found**  
**E** a mensagem: `"Especialização não encontrada."`

---

## Funcionalidade: Buscar todas as especializações

**Requisitos de acesso:**

- O usuário deve estar autenticado.
- Perfis permitidos: `adm`, `gestor`, `operadores`.

**Cenários:**

### Cenário: Buscar especializações de um militar

**Quando** o usuário busca todas as especializações de um militar existente  
**Então** deve retornar uma lista com status **200 OK**

---

### Cenário: Militar inexistente

**Quando** o usuário tenta buscar especializações de um militar que não existe  
**Então** deve retornar status **404 Not Found**  
**E** a mensagem: `"Militar não encontrado."`

---

## Funcionalidade: Buscar especialização específica

**Requisitos de acesso:**

- O usuário deve estar autenticado.
- Perfis permitidos: `adm`, `gestor`, `operadores`.

**Cenários:**

### Cenário: Buscar especialização com sucesso

**Quando** o usuário busca por uma especialização existente pelo ID  
**Então** deve retornar os dados da especialização com status **200 OK**

---

### Cenário: Especialização inexistente

**Quando** o usuário tenta buscar uma especialização com ID inexistente  
**Então** deve retornar status **404 Not Found**  
**E** a mensagem: `"Especialização não encontrada."`

---

### Cenário: Militar inexistente

**Quando** o usuário tenta buscar especialização de um militar que não existe  
**Então** deve retornar status **404 Not Found**  
**E** a mensagem: `"Militar não encontrado."`

---
