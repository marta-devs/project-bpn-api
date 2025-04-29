import { UserController } from '@/controllers/user-controller';
import type { Router } from 'express';
import { BaseRoute } from './base.routes';

import { AdicionarCursoController } from '@/controllers/curso/adicionar-curso-controller';
import { AddCursoService } from '@/services/curso/add-curso-service';
import { CursoRepository } from '@/repositories/curso-respository';

export default class ExampleRoutes extends BaseRoute {
	public routes(routes: Router): void {
		routes.get('/', new UserController().getUser);
    routes.post('/tests', 
      new AdicionarCursoController(new AddCursoService(new CursoRepository())).handle
    )
	}
}
