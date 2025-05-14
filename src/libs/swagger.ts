import swaggerAutogen from 'swagger-autogen';

const doc = {
	info: {
		version: '1.0.0',
		title: 'project bpn api',
		description: 'API documentation for project bpn',
	},
	servers: [
		{
			url: 'http://localhost:3333',
		},
	],
	components: {
		schemas: {
			someBody: {
				$name: 'Jhon Doe',
				$age: 29,
				about: '',
			},
			someResponse: {
				name: 'Jhon Doe',
				age: 29,
				diplomas: [
					{
						school: 'XYZ University',
						year: 2020,
						completed: true,
						internship: {
							hours: 290,
							location: 'XYZ Company',
						},
					},
				],
			},
			noContentDelete: {
				data: null,
				message: 'Dados deletado com Sucesso',
				error: null,
			},
			badRequestError: {
				message: 'Error de validação',
				data: null,
				error: {
					statusCode: '400',
				},
			},
			serverError: {
				message: 'Erro interno. Por favor tente mais tarde.',
				data: null,
				error: {
					statusCode: '500',
				},
			},
			someEnum: {
				'@enum': ['red', 'yellow', 'green'],
			},
			militaresResponse: {
				message: 'Dados buscados com sucesso',
				data: [
					{
						id: 'any_id',
						nome: 'any_nome',
						nomeGuerra: 'any_nomeGuerra',
						dataNascimento: 'any_dataNascimento',
						sexo: 'Masculino',
						patente: 'any_patente',
						situacaoMilitar: 'any_patente',
						nacionalidade: 'any_nacionalidade',
						estadoCivil: 'any_estadoCivil',
						dataIncorporacao: 'any_dataIncorporacao',
						naturalidade: 'any_naturalidade',
						telefone1: 'any_telefone1',
						telefone2: 'any_telefone2',
						NIP: 'any_nip',
						email: 'any_email@mail.com',
						endereco: {
							provincia: 'any_provincia',
							municipio: 'any_provincia',
							bairro: 'any_bairro',
							rua: 'any_rua',
							numeroCasa: 'any_numeroCasa',
						},
						DadosPessoais: {
							filiacaoMaterna: 'any_filiacaoMaterna',
							filiacaoPaterna: 'any_filiacaoPaterna',
							numeroBI: 'any_numeroBI',
							numeroPassaporte: 'any_numeroPassaporte',
							numeroSegurancaSocial: 'any_numeroSegurancaSocial',
							quantidadeFilho: 4,
							nomeEsposa: 'any_nomeEsposa',
						},
						Promocao: [
							{
								id: 'any_id',
								promocao: 'any_promocao',
								descricao: 'any_descricao',
								dataPromocao: 'any_dataPromocao',
							},
						],
						FormacoesAcademicas: [
							{
								id: 'any_id',
								instituicao: 'any_instituicao',
								tipoDeEnsino: 'any_tipoDeEnsino',
								classe: 'any_classe',
								Ano: 'any_ano',
								dataInicio: 'any_dataInicio',
								dataFim: 'any_dataFim',
								curso: 'any_curso',
								militarId: 'any_militarId',
								createdAt: 'any_data',
								updatedAt: 'any_data',
							},
						],
						FormacoesMilitares: [
							{
								id: 'any_id',
								instituicao: 'any_instituicao',
								dataInicio: 'any_dataInicio',
								dataFim: 'any_dataFim',
								curso: 'any_curso',
								militarId: 'any_militarId',
								createdAt: 'any_data',
								updatedAt: 'any_data',
							},
						],
						Especilidades: [
							{
								id: 'any_id',
								instituicao: 'any_instituicao',
								tipoDeEnsino: 'any_tipoDeEnsino',
								dataInicio: 'any_dataInicio',
								dataFim: 'any_dataFim',
								curso: 'any_curso',
								militarId: 'any_militarId',
								createdAt: 'any_data',
								updatedAt: 'any_data',
							},
						],
						ContactoEmergencia: [
							{
								id: 'any_id',
								nome: 'any_nome',
								telefone: 'any_telefone',
								grauParentesco: 'any_grauParentesco',
								militarId: 'any_militarId',
								createdAt: 'any_data',
								updatedAt: 'any_data',
							},
						],
					},
				],
			},
		},
		securitySchemes: {
			bearerAuth: {
				type: 'http',
				scheme: 'bearer',
			},
		},
	},
};

const outputFile = '../../swagger-output.json';
const routes = ['../routes/*.ts']; // Path to your API routes

swaggerAutogen({ openapi: '3.1.0' })(outputFile, routes, doc);
