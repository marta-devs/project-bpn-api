## Funcionalidade: Gerar relatório da ficha de um militar

**Como** operador, gestor ou administrador  
**Quero** gerar o relatório da ficha detalhada de um militar  
**Para que** eu possa ter uma visão completa de sua trajetória

### Cenário: Geração de relatório iniciada

```gherkin
Dado que o usuário possui permissão
E o militar existe
Quando a requisição para gerar o relatório for enviada
Então o sistema deve iniciar o processamento em background ou fila
E retornar status 202
E iniciar notificação via socket com status "processando"
```

### Cenário: Progresso atualizado via socket

```gherkin
Dado que o relatório está em andamento
Quando o progresso for atualizado
Então o sistema deve enviar via socket o status atual: "processando", "finalizado" ou "erro"
```
