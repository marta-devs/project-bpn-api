## 📌 Funcionalidade: Gerenciamento de Promoções

### Feature: Adicionar promoção

```gherkin
Feature: Adicionar promoção
  Como um operador, administrador ou gestor
  Quero adicionar uma promoção a um militar
  Para registrar sua nova patente

  Background:
    Given o usuário está autenticado
    And possui papel de "operador", "adm" ou "gestor"

  Scenario: Militar não encontrado
    When o usuário informa um ID de militar inexistente
    Then a API deve responder com status 404
    And retornar a mensagem "Militar não encontrado"

  Scenario: Militar com status REMOVIDO ou FALECIDO
    When o usuário tenta promover um militar com status inválido
    Then a API deve responder com status 422
    And retornar a mensagem "Não é possível atribuir promoção ao militar devido ao seu status"

  Scenario: Campos obrigatórios inválidos
    When o usuário envia dados obrigatórios inválidos
    Then a API deve responder com status 422
    And retornar a mensagem "Campos inválidos ou ausentes"

  Scenario: Promoção registrada com sucesso
    When o usuário envia dados válidos
    Then a API deve responder com status 201
    And retornar os dados da promoção
```

### Feature: Remover promoção

```gherkin
Feature: Remover promoção
  Como um operador, administrador ou gestor
  Quero remover uma promoção
  Para manter o histórico correto

  Background:
    Given o usuário está autenticado
    And possui papel de "operador", "adm" ou "gestor"

  Scenario: Promoção não encontrada
    When o usuário tenta remover um ID inexistente
    Then a API deve responder com status 404
    And retornar a mensagem "Promoção não encontrada"

  Scenario: Promoção removida com sucesso
    When o usuário informa um ID válido
    Then a API deve responder com status 200
    And retornar os dados da promoção removida
```

### Feature: Editar promoção

```gherkin
Feature: Editar promoção
  Como um operador, administrador ou gestor
  Quero editar uma promoção existente
  Para corrigir ou atualizar as informações

  Background:
    Given o usuário está autenticado
    And possui papel de "operador", "adm" ou "gestor"

  Scenario: Promoção não encontrada
    When o usuário informa um ID inexistente
    Then a API deve responder com status 404
    And retornar a mensagem "Promoção não encontrada"

  Scenario: Militar não encontrado
    When o ID de militar informado é inválido
    Then a API deve responder com status 404
    And retornar a mensagem "Militar não encontrado"

  Scenario: Militar com status REMOVIDO ou FALECIDO
    When o militar não pode ser promovido
    Then a API deve responder com status 422
    And retornar a mensagem "Não é possível atribuir promoção ao militar devido ao seu status"

  Scenario: Dados inválidos
    When o usuário envia dados obrigatórios inválidos
    Then a API deve responder com status 422
    And retornar a mensagem "Campos inválidos ou ausentes"

  Scenario: Promoção editada com sucesso
    When o usuário envia dados válidos
    Then a API deve responder com status 200
    And retornar os dados da promoção atualizada
```

### Feature: Buscar todas as promoções

```gherkin
Feature: Buscar todas as promoções
  Como um operador, administrador ou gestor
  Quero visualizar todas as promoções
  Para consultar o histórico dos militares

  Background:
    Given o usuário está autenticado
    And possui papel de "operador", "adm" ou "gestor"

  Scenario: Militar não encontrado
    When o usuário informa um ID de militar inexistente
    Then a API deve responder com status 404
    And retornar a mensagem "Militar não encontrado"

  Scenario: Promoções encontradas
    When o usuário informa um ID válido
    Then a API deve responder com status 200
    And retornar um array com as promoções
```

### Feature: Buscar uma promoção específica

```gherkin
Feature: Buscar uma promoção específica
  Como um operador, administrador ou gestor
  Quero consultar uma promoção específica
  Para obter detalhes dela

  Background:
    Given o usuário está autenticado
    And possui papel de "operador", "adm" ou "gestor"

  Scenario: Militar não encontrado
    When o usuário informa um ID de militar inexistente
    Then a API deve responder com status 404
    And retornar a mensagem "Militar não encontrado"

  Scenario: Promoção não encontrada
    When o usuário informa um ID de promoção inexistente
    Then a API deve responder com status 404
    And retornar a mensagem "Promoção não encontrada"

  Scenario: Promoção encontrada
    When o usuário informa um ID válido
    Then a API deve responder com status 200
    And retornar os dados da promoção
```
