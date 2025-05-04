import { type Request, type Response, Router } from 'express';
import { fakerPT_BR as faker } from '@faker-js/faker';

export class UserController {
	async getUser(req: Request, res: Response): Promise<any> {
		const isOnline = true;

		if (!isOnline) throw new Error('User is offline');

		return res.send(faker.string.uuid());
	}
}
