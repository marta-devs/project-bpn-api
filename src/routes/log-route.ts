import type { Request, Response, Router } from 'express';
import { BaseRoute } from './base.routes';
import { LogController } from '../controllers/log-controller';
import { LogService } from '../services/login/login-service';
import { UsuarioRepository } from '../repositories/usuario-repositoy';
import { MilitarRepository } from '../repositories/militar-repository';
import { validateData } from '../middlewares/validation';
import { loginValidator } from '../validators/login/login-validator';
import { ensureAuthenticated } from '../middlewares/auth';

export default class LogRoute extends BaseRoute {
	public routes(routes: Router): void {
		routes.post(
			'/usuario/login',
			validateData(loginValidator),
			(request: Request, response: Response) => {
				new LogController(
					new LogService(new UsuarioRepository(), new MilitarRepository()),
				).handle(request, response);
			},
		);
	}
}
