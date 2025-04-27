### Funcionalidade: Login de Usuário

**Como** um usuário autorizado  
**Quero** realizar login utilizando meu e-mail ou nome de usuário  
**Para que** eu possa acessar os recursos protegidos da API

#### Cenário: Login com e-mail ou username válidos e senha correta

```gherkin
Dado que o usuário informa um e-mail ou nome de usuário válido
E a senha está correta
E o status do usuário é ATIVO
Quando a requisição de login é enviada
Então a API deve retornar um token JWT
E o status da resposta deve ser 200
E a resposta deve conter a mensagem "Login realizado com sucesso"
```

#### Cenário: Login com usuário em situação inválida (FALECIDO, REMOVIDO, SUSPENSO, EM FERIA)

```gherkin
Dado que o usuário existe
E o status do usuário é FALECIDO
Quando a requisição de login é enviada
Então a API deve retornar status 403
E a resposta deve conter a mensagem "Usuário não autorizado a fazer login"
```

_(repete para os outros status inválidos: REMOVIDO, SUSPENSO, EM FERIA)_

#### Cenário: Login com e-mail ou username inexistente

```gherkin
Dado que o e-mail ou nome de usuário informado não existe
Quando a requisição de login é enviada
Então a API deve retornar status 404
E a resposta deve conter a mensagem "Usuário não encontrado"
```

#### Cenário: Login com senha incorreta

```gherkin
Dado que o e-mail ou nome de usuário existe
E a senha está incorreta
Quando a requisição de login é enviada
Então a API deve retornar status 401
E a resposta deve conter a mensagem "Credenciais inválidas"
```

#### Cenário: Requisição de login com campos inválidos

```gherkin
Dado que o e-mail ou nome de usuário está em formato inválido
Ou a senha está ausente
Quando a requisição de login é enviada
Então a API deve retornar status 400
E a resposta deve conter a mensagem "Dados inválidos na requisição"
```
