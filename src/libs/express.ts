import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import routes from '../routes';
import errorMiddleware from '../middlewares/error';
import swaggerFile from '../../swagger-output.json';

export class ExpressAdapter {
	public app: any;

	constructor() {
		this.app = express();

		this.app.use(express.json());
		this.app.use(cors());

		this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
		this.app.use('/api/v1', routes);

		//Deve estar sempre ultimo
		this.app.use(errorMiddleware);
	}

	public runServer(port: number) {
		return this.app.listen(port, () => {
			console.log(`Server is running on http://localhost:${port}/api/v1`);
			console.log(`Documention running on http://localhost:${port}/api-docs`);
		});
	}
}
