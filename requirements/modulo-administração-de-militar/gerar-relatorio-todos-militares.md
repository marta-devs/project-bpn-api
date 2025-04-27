## Funcionalidade: Gerar relatório de todos os militares

**Como** operador, gestor ou administrador  
**Quero** gerar um relatório consolidado de todos os militares  
**Para que** eu tenha uma visão macro dos dados

### Cenário: Geração do relatório iniciada

```gherkin
Dado que o usuário está autenticado e tem permissão
Quando a requisição for enviada
Então o relatório deve ser processado em background ou via fila
E a resposta deve conter status 202
E deve iniciar comunicação via socket com status "processando"
```
