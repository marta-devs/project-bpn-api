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
