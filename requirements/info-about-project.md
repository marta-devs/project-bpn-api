## Tabela do sistema

### Modulo de Acesso e segurança

**Acesso**

- id: string
- militarId: string
- visitanteId: string
- data: date
- horaEntrada: time
- horaSaida: time
- status: string
- tipoAcesso: string
- motivo: string
- porteiroEntradaId(UsuarioId): string
- porteiroSaidaId(UsuarioId): string

**Visitante**

- id: string
- name: string
- tipoVisitante: string
- NBI: string
- NIF: string
- createAt: string
- updateAt: string

### Modulo de sistema

**usuario**

- username: string
- militarId: string
- senha: string
- função: string
- status: string

**logs**

- id
- tipo_logs: string
- usuarioId: string
- name: string
- stack: string

### Modulo de Logistica e Patrimonio

**categoria**

- id: string
- name: string
- descricao: string
- createAt: string
- update: string

**Item**

- id: string
- name: string
- descricao: string
- isValidade: boolean
- isreturned: boolean
- categoriaId: string
- stockId: string
- status: string
- tipo_item: string
- createAt: date
- updateAt: date

**stock**

- id: string
- max_qdt: int
- min_qdt: int
- qdt: int
- validate: date
- createAt: date
- updateAt: date

**stock_mov**

- id: string
- data: string
- qtd: int
- status: string
- stockId: string
- createAt: date

**tipo_item**

- id: string
- name: string
- descricao: string
- createAt: date
- updateAt: date

**pedido**

- id: string
- status: string
- createAt: string
- updateAt: string
- data_devolução: date
- usuarioId: string

**pedido_item**

- id:string
- itemId: string
- pedidoId: string
- qtd: int
- createAt: string
- updateAt: string

### Modulo de Finanças e Orçamentos

**tipo_orcamento**

- id: string
- name: string
- descricao: string

**Orçamento**

- id: string
- ano: date
- valor_total: float
- motivo: string
- finalidade: string
- status: string
- createAt: date
- updateAt: date
- data_limite: date
- tipo_orcamentoId: string

**Gastos**

- id: string
- orcamentoId: string
- name: string
- descricao: string
- valor: float

**conta**

- id: string
- name: string
- saldo_atual: float

**conta_mov**

- id: string
- status: string
- createAt: date
- updateAt: date
- valor_mov: float

### Modulo de Adminitração e Recurso Humanos

**endereco**

- id: string
- bairro: string
- provincia: string
- municipio: string
- rua: string

**Militar**

- id: string
- nome: string
- patente: string
- email: string
- NIP: string
- estado_civil: string
- telefone: string
- status: string
- situacao: string
- data_ultima_promocao: date
- data_incorporacao: date
- qrcode: string
- funcao: string

**dados pessoais**

- filiacao_paterna: string
- filiacao_materna: string

**promocoes**

- id: string
- name: string
- data_promocao: string

**formacoes academica**

- id: string
- instituição: string
- tipo de ensino: string
- classes: string
- start_year: int
- end_year: int
- start_month: int
- end_month: int
- curso: string
- level_ensino: string

**formações militares**

- id: string
- curso: string
- instituiçao: string
- start_year: int
- end_year: int
- start_month: string
- end_month: string

**Especializações**

- id: string
- curso: string
- instituição: string
- start_year: int
- end_year: int
- start_month: string
- end_month: string

**curso**

- id: string
- nome: string
- description: string
- tipo_cursos: string

**Intituição**

- id: string
- nome: string
- descrição: string
- tipo_instituição

**tipo de ensino**

- id: string
- nome: string
- description: string
-

**contacto_emerg**

- id: string
- telefone: string
- nome: string
- parenteco: string

**historico**

- id: string
- titulo do historico
- descriçao
- motivo
- data
- createAt
- updateAt

**unidade_militar**

- id: string
- name: string
- localizacao: string
- provincia: string
- n_unidade: string
- createAt: date
- updateAt: date

**escala_servico**

- id: string
- dia_trabalho: string
- turno: string
- createAt: date
- updateAt: date

**falta**

- id: string
- Mês: date
- ano: date
- ref: string
- tempo_estrazo: int
- Motivo: string
- atestado: boolean
- createAt: date
- updateAt: date

## Paginas e usuario do sistema

### paginas

- Login v
- Dashboard
- solitação de pedido
- tela para aprovação e negaçao pedidos
- tela de controle de entrada
- telas para cadastramentos
- telas para listagem
- telas para gerenciamento item e stock
- telas para gerenciamento de gasto e orçamentos
- tela para exibição de relatorios
- tela controle de entrada e saida

### usuarios do sistema

- adminisrador
- chefe de cozinha
- gerente de cozinha
- treinador
- normal
- porteiro
- gerente geral

## Ferramentas

## Generico

- convencional commit
- BDD
- code-reviews e gitflows
- ci/cd - github action, snyk security, coveralls, netfly(backend) e vercel(frontend)
- git

### Backend

- Mysql
- Prisma
- Nestjs
- MVC
- socket.io - para notificação
- jwt
- zod
- jest
- supatest
- dayjs
- typescripts
- pdf-node- para gerar relatorio

### FrontEnd

- React
- React-query
- typescript
- react-hook-form
- zod
- tailwindcss
- shadncn-ui
- atomic-design
- playwright- test 2to2

## Ferramenta de gestão e comunicação

- Discord- Tira duvidas
- clickup / trello - Gestão de tarefa
- whatsapp e google meet - Conferência e comunicação
