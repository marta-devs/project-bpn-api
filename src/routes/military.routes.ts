import type { Request, Response, Router } from 'express';
import { BaseRoute } from './base.routes';
import { MilitarRepository } from '../repositories/militar-repository';
import { RemoverMilitarService } from '../services/militar/remover-militar-service';
import { RemoverMilitarController } from '../controllers/militar/remover-militar-controller';
import { validateParams } from '../middlewares/validation';
import { removerMilitarySchema } from '../validators/militar/militar-schema';

export default class MilitarRoutes extends BaseRoute {
	public routes(routes: Router): void {
		routes.delete(
			'/militares/:id',
			validateParams(removerMilitarySchema),
			(request, response) => {
				const militarRepository = new MilitarRepository();
				const removerMilitarService = new RemoverMilitarService(
					militarRepository,
				);
				new RemoverMilitarController(removerMilitarService).handle(
					request,
					response,
				);
			},
		);
	}
}
