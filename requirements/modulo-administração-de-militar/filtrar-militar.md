## Funcionalidade: Filtrar militares

**Como** operador, administrador ou gestor  
**Quero** filtrar militares por diferentes atributos  
**Para que** eu possa localizar registros específicos

### Cenário: Filtragem bem-sucedida com múltiplos critérios

```gherkin
Dado que o usuário está autenticado e tem permissão
Quando a requisição for enviada com filtros como nome, nome de guerra, seção, NBI, etc
Então a API deve retornar os militares correspondentes
E o status deve ser 200
E os resultados não devem incluir status REMOVIDO ou FALECIDO
```
