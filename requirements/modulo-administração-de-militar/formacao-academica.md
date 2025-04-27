## Funcionalidade: Adicionar formação acadêmica

```gherkin
Funcionalidade: Adicionar formação acadêmica

  Como um usuário autenticado com permissão adequada
  Quero poder adicionar formações acadêmicas para um militar existente
  Para registrar seu histórico educacional formal

  Cenário: Adicionar formação acadêmica com sucesso
    Dado que estou autenticado como "adm"
    E forneço um militar com status ATIVO
    E forneço dados válidos e únicos da formação acadêmica
    Quando envio uma requisição POST para /militares/{id}/formacoes-academicas
    Então devo receber status 201
    E uma mensagem "Formação acadêmica adicionada com sucesso"

  Cenário: Militar inexistente
    Dado que estou autenticado
    Quando envio uma requisição POST para /militares/{id_inexistente}/formacoes-academicas
    Então devo receber status 404
    E uma mensagem "Militar não encontrado"

  Cenário: Militar com status REMOVIDO ou FALECIDO
    Dado que estou autenticado
    E o militar tem status "REMOVIDO"
    Quando envio uma requisição POST para /militares/{id}/formacoes-academicas
    Então devo receber status 422
    E uma mensagem "Não é possível adicionar formação acadêmica ao militar devido ao seu status atual"

  Cenário: Formação acadêmica duplicada
    Dado que estou autenticado
    E já existe uma formação acadêmica com o mesmo nome para o militar
    Quando envio uma requisição POST para /militares/{id}/formacoes-academicas
    Então devo receber status 409
    E uma mensagem "Formação acadêmica já cadastrada para este militar"

  Cenário: Dados obrigatórios ausentes ou inválidos
    Dado que estou autenticado
    E envio campos obrigatórios ausentes ou com valores inválidos
    Quando envio a requisição POST
    Então devo receber status 400
    E uma mensagem "Campos obrigatórios ausentes ou inválidos"
```

---

## Funcionalidade: Editar formação acadêmica

```gherkin
Funcionalidade: Editar formação acadêmica

  Como um usuário autenticado com permissão adequada
  Quero poder editar uma formação acadêmica existente
  Para corrigir ou atualizar os dados

  Cenário: Edição com sucesso
    Dado que estou autenticado como "gestor"
    E a formação acadêmica existe e pertence a um militar com status ATIVO
    Quando envio uma requisição PUT para /formacoes-academicas/{id}
    Então devo receber status 203
    E a formação acadêmica atualizada

  Cenário: Militar inexistente
    Dado que estou autenticado
    Quando envio uma requisição PUT para /militares/{id_inexistente}/formacoes-academicas/{formacao_id}
    Então devo receber status 404
    E uma mensagem "Militar não encontrado"

  Cenário: Formação acadêmica inexistente
    Dado que estou autenticado
    Quando envio uma requisição PUT para /formacoes-academicas/{id_inexistente}
    Então devo receber status 404
    E uma mensagem "Formação acadêmica não encontrada"

  Cenário: Militar com status REMOVIDO ou FALECIDO
    Dado que estou autenticado
    E o militar tem status "FALECIDO"
    Quando tento editar sua formação acadêmica
    Então devo receber status 422
    E uma mensagem "Não é possível editar formação acadêmica do militar devido ao seu status atual"

  Cenário: Campos obrigatórios ausentes ou inválidos
    Dado que estou autenticado
    E envio dados inválidos ou em branco
    Quando envio a requisição PUT
    Então devo receber status 400
    E uma mensagem "Campos obrigatórios ausentes ou inválidos"
```

---

## Funcionalidade: Remover formação acadêmica

```gherkin
Funcionalidade: Remover formação acadêmica

  Como um usuário autenticado com permissão adequada
  Quero poder remover uma formação acadêmica de um militar
  Para manter os dados atualizados e corretos

  Cenário: Remoção com sucesso
    Dado que estou autenticado como "operador"
    E a formação acadêmica existe
    Quando envio uma requisição DELETE para /formacoes-academicas/{id}
    Então devo receber status 203
    E uma mensagem "Formação acadêmica removida com sucesso"

  Cenário: Formação acadêmica inexistente
    Dado que estou autenticado
    Quando envio uma requisição DELETE para /formacoes-academicas/{id_inexistente}
    Então devo receber status 404
    E uma mensagem "Formação acadêmica não encontrada"
```

---

## Funcionalidade: Buscar todas as formações acadêmicas de um militar

```gherkin
Funcionalidade: Buscar todas as formações acadêmicas

  Como um usuário autenticado
  Quero visualizar todas as formações acadêmicas de um militar
  Para consultar seu histórico educacional

  Cenário: Buscar com sucesso
    Dado que estou autenticado
    E o militar existe
    Quando envio uma requisição GET para /militares/{id}/formacoes-academicas
    Então devo receber status 200
    E uma lista com as formações acadêmicas do militar

  Cenário: Militar inexistente
    Dado que estou autenticado
    Quando envio uma requisição GET para /militares/{id_inexistente}/formacoes-academicas
    Então devo receber status 404
    E uma mensagem "Militar não encontrado"
```

---

## Funcionalidade: Buscar formação acadêmica específica

```gherkin
Funcionalidade: Buscar formação acadêmica por ID

  Como um usuário autenticado
  Quero consultar os detalhes de uma formação acadêmica específica
  Para verificar seu conteúdo

  Cenário: Buscar com sucesso
    Dado que estou autenticado
    E a formação acadêmica existe
    Quando envio uma requisição GET para /formacoes-academicas/{id}
    Então devo receber status 200
    E os dados da formação acadêmica

  Cenário: Formação acadêmica inexistente
    Dado que estou autenticado
    Quando envio uma requisição GET para /formacoes-academicas/{id_inexistente}
    Então devo receber status 404
    E uma mensagem "Formação acadêmica não encontrada"
```
