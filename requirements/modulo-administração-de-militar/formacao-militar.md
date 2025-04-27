## Funcionalidade: Adicionar formação militar

**Contexto:**  
Usuário autenticado com perfil `adm`, `gestor` ou `operador` deseja adicionar uma formação militar a um militar existente.

```gherkin
Funcionalidade: Adicionar formação militar

  Como um usuário autenticado com permissão adequada
  Quero poder adicionar formações militares para um militar existente
  Para manter o histórico de qualificações atualizado

  Cenário: Adicionar formação com sucesso
    Dado que estou autenticado como "adm"
    E forneço um militar com status ATIVO
    E forneço dados válidos e únicos da formação
    Quando envio uma requisição POST para /militares/{id}/formacoes
    Então devo receber status 201
    E uma mensagem "Formação adicionada com sucesso"

  Cenário: Militar inexistente
    Dado que estou autenticado
    Quando envio uma requisição POST para /militares/{id_inexistente}/formacoes
    Então devo receber status 404
    E uma mensagem "Militar não encontrado"

  Cenário: Militar com status REMOVIDO ou FALECIDO
    Dado que estou autenticado
    E o militar possui status "REMOVIDO"
    Quando envio uma requisição POST para /militares/{id}/formacoes
    Então devo receber status 422
    E uma mensagem "Não é possível adicionar formação ao militar devido ao seu status atual"

  Cenário: Formação duplicada
    Dado que estou autenticado
    E já existe uma formação com o mesmo nome para o mesmo militar
    Quando envio uma requisição POST para /militares/{id}/formacoes
    Então devo receber status 409
    E uma mensagem "Formação já cadastrada para este militar"

  Cenário: Dados obrigatórios ausentes ou inválidos
    Dado que estou autenticado
    E envio a requisição sem preencher campos obrigatórios ou com dados inválidos
    Quando envio a requisição POST
    Então devo receber status 400
    E uma mensagem "Campos obrigatórios ausentes ou inválidos"
```

---

## Funcionalidade: Editar formação militar

```gherkin
Funcionalidade: Editar formação militar

  Como um usuário autenticado com permissão adequada
  Quero poder editar uma formação militar existente
  Para corrigir ou atualizar informações

  Cenário: Edição com sucesso
    Dado que estou autenticado como "gestor"
    E a formação existe e pertence a um militar ATIVO
    Quando envio uma requisição PUT para /formacoes/{id}
    Então devo receber status 203
    E a formação atualizada

  Cenário: Militar inexistente
    Dado que estou autenticado
    Quando envio uma requisição PUT para /militares/{id_inexistente}/formacoes/{formacao_id}
    Então devo receber status 404
    E uma mensagem "Militar não encontrado"

  Cenário: Formação inexistente
    Dado que estou autenticado
    Quando envio uma requisição PUT para /formacoes/{id_inexistente}
    Então devo receber status 404
    E uma mensagem "Formação não encontrada"

  Cenário: Militar com status REMOVIDO ou FALECIDO
    Dado que estou autenticado
    E o militar tem status "FALECIDO"
    Quando tento editar sua formação
    Então devo receber status 422
    E uma mensagem "Não é possível editar formação do militar devido ao seu status atual"

  Cenário: Campos inválidos
    Dado que estou autenticado
    E envio campos inválidos ou em branco
    Quando envio a requisição PUT
    Então devo receber status 400
    E uma mensagem "Campos obrigatórios ausentes ou inválidos"
```

---

## Funcionalidade: Remover formação militar

```gherkin
Funcionalidade: Remover formação militar

  Como um usuário autenticado com permissão adequada
  Quero poder remover uma formação militar
  Para manter os dados atualizados

  Cenário: Remoção com sucesso
    Dado que estou autenticado como "operador"
    E a formação existe
    Quando envio uma requisição DELETE para /formacoes/{id}
    Então devo receber status 203
    E uma mensagem "Formação removida com sucesso"

  Cenário: Formação inexistente
    Dado que estou autenticado
    Quando envio uma requisição DELETE para /formacoes/{id_inexistente}
    Então devo receber status 404
    E uma mensagem "Formação não encontrada"
```

---

## Funcionalidade: Buscar todas as formações de um militar

```gherkin
Funcionalidade: Buscar todas as formações militares

  Como um usuário autenticado
  Quero visualizar todas as formações de um militar
  Para consultar o histórico completo

  Cenário: Buscar com sucesso
    Dado que estou autenticado
    E o militar existe
    Quando envio uma requisição GET para /militares/{id}/formacoes
    Então devo receber status 200
    E a lista de formações do militar

  Cenário: Militar inexistente
    Dado que estou autenticado
    Quando envio uma requisição GET para /militares/{id_inexistente}/formacoes
    Então devo receber status 404
    E uma mensagem "Militar não encontrado"
```

---

## Funcionalidade: Buscar formação militar por ID

```gherkin
Funcionalidade: Buscar formação militar por ID

  Como um usuário autenticado
  Quero consultar uma formação militar específica
  Para ver seus detalhes

  Cenário: Buscar com sucesso
    Dado que estou autenticado
    E a formação existe
    Quando envio uma requisição GET para /formacoes/{id}
    Então devo receber status 200
    E os dados da formação

  Cenário: Formação inexistente
    Dado que estou autenticado
    Quando envio uma requisição GET para /formacoes/{id_inexistente}
    Então devo receber status 404
    E uma mensagem "Formação não encontrada"
```
