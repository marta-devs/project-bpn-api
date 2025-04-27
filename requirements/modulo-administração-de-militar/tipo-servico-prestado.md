## 📌 Funcionalidade: Gerenciamento de Tipos de Serviço Prestado

### Feature: Buscar todos os tipos de serviço prestado

```gherkin
Feature: Buscar todos os tipos de serviço prestado
  Como um usuário autenticado
  Quero visualizar todos os tipos de serviço cadastrados
  Para poder consultá-los no sistema

  Background:
    Given o usuário está autenticado
    And possui papel de "operador", "adm" ou "gestor"

  Scenario: Lista de tipos de serviço encontrada
    When o usuário requisita a lista de tipos de serviço
    Then a API deve responder com status 200
    And deve retornar um array de tipos de serviço

  Scenario: Nenhum tipo de serviço encontrado
    When o usuário requisita a lista de tipos de serviço
    And não há tipos cadastrados
    Then a API deve responder com status 204
    And deve retornar um array vazio
```

### Feature: Buscar tipo de serviço prestado por ID

```gherkin
Feature: Buscar um tipo de serviço prestado por ID
  Como um usuário autenticado
  Quero buscar um tipo de serviço pelo seu ID
  Para obter informações específicas sobre ele

  Background:
    Given o usuário está autenticado

  Scenario: ID fornecido é inválido (formato incorreto)
    When o usuário informa um ID booleano ou numérico simples
    Then a API deve responder com status 400
    And retornar a mensagem "ID inválido"

  Scenario: Tipo de serviço não encontrado
    When o usuário informa um ID inexistente
    Then a API deve responder com status 404
    And retornar a mensagem "Tipo de serviço não encontrado"

  Scenario: Tipo de serviço encontrado com sucesso
    When o usuário informa um ID válido
    Then a API deve responder com status 200
    And retornar os dados do tipo de serviço
```

### Feature: Remover tipo de serviço prestado

```gherkin
Feature: Remover tipo de serviço prestado
  Como um usuário autorizado
  Quero remover um tipo de serviço prestado
  Para manter o sistema atualizado

  Background:
    Given o usuário está autenticado
    And possui papel de "operador", "adm" ou "gestor"

  Scenario: Tipo de serviço não encontrado
    When o usuário tenta remover um ID inexistente
    Then a API deve responder com status 404
    And retornar a mensagem "Tipo de serviço não encontrado"

  Scenario: Remoção bem-sucedida
    When o usuário informa um ID válido
    Then a API deve responder com status 200
    And retornar os dados do tipo de serviço removido
```

### Feature: Editar tipo de serviço prestado

```gherkin
Feature: Editar tipo de serviço prestado
  Como um gestor ou administrador
  Quero editar os dados de um tipo de serviço
  Para manter as informações atualizadas

  Background:
    Given o usuário está autenticado
    And possui papel de "adm" ou "gestor"

  Scenario: ID inexistente
    When o usuário informa um ID que não existe
    Then a API deve responder com status 404
    And retornar a mensagem "Tipo de serviço não encontrado"

  Scenario: Campos obrigatórios inválidos
    When o usuário envia dados vazios ou não validados
    Then a API deve responder com status 422
    And retornar a mensagem "Campos inválidos ou ausentes"

  Scenario: Edição realizada com sucesso
    When o usuário informa um ID válido com dados corretos
    Then a API deve responder com status 200
    And retornar os dados atualizados
```

### Feature: Adicionar tipo de serviço prestado

```gherkin
Feature: Adicionar tipo de serviço prestado
  Como um gestor ou administrador
  Quero cadastrar um novo tipo de serviço
  Para que ele esteja disponível para uso

  Background:
    Given o usuário está autenticado
    And possui papel de "adm" ou "gestor"

  Scenario: Dados inválidos
    When o usuário envia campos obrigatórios vazios ou inválidos
    Then a API deve responder com status 422
    And retornar a mensagem "Campos inválidos ou ausentes"

  Scenario: Tipo de serviço adicionado com sucesso
    When o usuário envia dados válidos
    Then a API deve responder com status 201
    And retornar os dados do novo tipo de serviço
```
