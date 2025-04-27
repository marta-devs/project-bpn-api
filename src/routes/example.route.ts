import { UserController } from '@/controllers/user-controller';
import type { Router } from 'express';
import { BaseRoute } from './base.routes';

export default class ExampleRoutes extends BaseRoute {
	public routes(routes: Router): void {
		routes.get('/', new UserController().getUser);
	}
}
