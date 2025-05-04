import 'reflect-metadata';
import prisma from './libs/prisma';
import api from './configs/api';
import { ExpressAdapter } from './libs/express';

const port = parseInt(api.port.toString());

prisma
	.$connect()
	.then(() => {
		new ExpressAdapter().runServer(port);
	})
	.catch((error) => {
		console.error('Error connecting to the database:', error);
	});
