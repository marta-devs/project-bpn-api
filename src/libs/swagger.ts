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
const routes = ['../routes.ts']; // Path to your API routes

swaggerAutogen({ openapi: '3.1.0' })(outputFile, routes, doc);
