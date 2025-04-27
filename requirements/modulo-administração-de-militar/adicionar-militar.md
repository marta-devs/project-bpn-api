## Funcionalidade: Adicionar Militar

**Como** um usuário autenticado com permissão (operador, adm ou gestor)  
**Quero** adicionar um novo militar  
**Para que** ele seja registrado no sistema com todos os dados obrigatórios

### Cenário: Adição bem-sucedida de um militar com todos os dados válidos

```gherkin
Dado que o usuário está autenticado
E possui permissão de operador, adm ou gestor
E todos os dados obrigatórios foram preenchidos corretamente
Quando a requisição de criação de militar for enviada
Então o sistema deve criar o registro do militar e do usuário do sistema
E cadastrar pelo menos uma formação acadêmica e militar
E adicionar o militar a uma equipa, caso não seja chefe
E retornar status 201
E a resposta deve conter a mensagem "Militar cadastrado com sucesso"
```

### Cenário: Nickname ou username já existente

```gherkin
Dado que o nickname gerado automaticamente já existe
Quando a requisição for enviada
Então a API deve retornar status 409
E a resposta deve conter a mensagem "Nickname já existente, tente novamente"
```

### Cenário: NIP ou NBI duplicado

```gherkin
Dado que o NIP ou NBI informado já existe no banco de dados
Quando a requisição for enviada
Então a API deve retornar status 409
E a resposta deve conter a mensagem "NIP ou NBI já cadastrado"
```

### Cenário: Formação acadêmica e militar ausentes

```gherkin
Dado que nenhuma formação foi informada
Quando a requisição for enviada
Então a API deve retornar status 400
E a resposta deve conter a mensagem "É necessário informar pelo menos uma formação acadêmica e uma militar"
```

### Cenário: Especializações ou formações repetidas

```gherkin
Dado que há formações acadêmicas ou militares repetidas
Ou especializações duplicadas
Quando a requisição for enviada
Então a API deve retornar status 422
E a resposta deve conter a mensagem "Formações ou especializações duplicadas não são permitidas"
```

### Cenário: Equipa inexistente

```gherkin
Dado que o militar não é chefe de divisão
E a equipa informada não existe
Quando a requisição for enviada
Então a API deve retornar status 404
E a resposta deve conter a mensagem "Equipa não encontrada"
```

### Cenário: Tipo de prestação de serviço inexistente

```gherkin
Dado que o tipo de prestação de serviço não existe no banco de dados
Quando a requisição for enviada
Então a API deve retornar status 404
E a resposta deve conter a mensagem "Tipo de prestação de serviço não encontrado"
```

### Cenário: Contato de emergência ausente

```gherkin
Dado que nenhum contato de emergência foi informado
Quando a requisição for enviada
Então a API deve retornar status 400
E a resposta deve conter a mensagem "É necessário informar pelo menos um contato de emergência"
```
