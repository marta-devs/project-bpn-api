## Funcionalidade: Remover Militar

**Como** administrador ou gestor autenticado  
**Quero** remover um militar  
**Para que** seu status seja alterado sem apagá-lo do banco

### Cenário: Remoção bem-sucedida

```gherkin
Dado que o usuário está autenticado e possui permissão
E o militar existe
Quando a requisição de remoção for enviada
Então o status do militar deve ser alterado para REMOVIDO
E a API deve retornar status 200
E a resposta deve conter a mensagem "Militar removido com sucesso"
```

### Cenário: Militar não encontrado

```gherkin
Dado que o ID do militar não existe
Quando a requisição for enviada
Então a API deve retornar status 404
E a resposta deve conter a mensagem "Militar não encontrado"
```
