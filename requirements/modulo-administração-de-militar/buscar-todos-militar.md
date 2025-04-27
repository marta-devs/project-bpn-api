## Funcionalidade: Buscar todos os militares

**Como** usuário autenticado com permissão  
**Quero** visualizar todos os militares  
**Para que** possa gerenciá-los no sistema

### Cenário: Listar todos militares válidos

```gherkin
Dado que o usuário está autenticado e tem permissão
Quando a requisição for enviada
Então a API deve retornar uma lista de militares com status diferente de REMOVIDO ou FALECIDO
E a resposta deve conter status 200
```
