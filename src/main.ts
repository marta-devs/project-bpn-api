import express from 'express';
import prisma from './libs/prisma';
import cors from 'cors';
import api from './configs/api';
import swaggerUi from 'swagger-ui-express';
import routes from '@/routes';
import errorMiddleware from '@/middlewares/error';
import swaggerFile from '../swagger-output.json';

const port = api.port;

prisma
	.$connect()
	.then(() => {
		const app = express();

		app.use(express.json());
		app.use(cors());

		app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
		app.use('/api/v1', routes);

		//Deve estar sempre ultimo
		app.use(errorMiddleware);

		return app.listen(port, () => {
			console.log(`Server is running on http://localhost:${port}/api/v1`);
			console.log(`Documention running on http://localhost:${port}/api-docs`);
		});
	})
	.catch((error) => {
		console.error('Error connecting to the database:', error);
	});
