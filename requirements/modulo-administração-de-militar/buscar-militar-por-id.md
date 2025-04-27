## Funcionalidade: Buscar militar por ID

**Como** qualquer usuário autenticado  
**Quero** consultar um militar pelo ID  
**Para que** possa acessar seus dados completos

### Cenário: Militar encontrado

```gherkin
Dado que o usuário está autenticado
E o ID do militar existe
Quando a requisição for enviada
Então a API deve retornar os dados do militar
E o status da resposta deve ser 200
```

### Cenário: Militar não encontrado

```gherkin
Dado que o ID informado não corresponde a nenhum registro
Quando a requisição for enviada
Então a API deve retornar status 404
E a resposta deve conter a mensagem "Militar não encontrado"
```
