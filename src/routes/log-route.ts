import type { Request, Response, Router } from 'express';
import { BaseRoute } from './base.routes';
import { LogController } from '@/controllers/log-controller';
import { LogService } from '@/services/login/login-service';
import { UsuarioRepository } from '@/repositories/usuario-repositoy';

export default class LogRoute extends BaseRoute {
	public routes(routes: Router): void {
		routes.post('/usuario/login', (request: Request, response: Response) => {
			new LogController(new LogService(new UsuarioRepository())).handle(
				request,
				response,
			);
		});
	}
}
