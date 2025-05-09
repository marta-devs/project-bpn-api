import type { Router } from 'express';
import { BaseRoute } from './base.routes';
import { AddFormacaoMilitaryController } from '../controllers/formacao military/adicionar-formacao-militar-controller';
import { AddFormacaoMilitarService } from '../services/formacaoMilitar/add-formacao-militar-service';
import { FormacaoMilitaryRepository } from '../repositories/formacao-militar-repository';
import { validateData } from '../middlewares/validation';
import { addFormacaoMilitaryValidator } from '../validators/formacao-militar/formacao-militar-validator';
import { FindAllFormacaoMilitarController } from '../controllers/formacao military/find-all-formacao-militar-controller';
import { FindAllFormacaoMilitarService } from '../services/formacaoMilitar/find-all-formacao-militar-service';
import { FindOneFormacaoMilitarService } from '../services/formacaoMilitar/find-one-formacao-militar-service';
import { FindOneFormacaoMilitarController } from '../controllers/formacao military/find-one-formacao-militar-controller ';
import { MilitarRepository } from '../repositories/militar-repository';

const addFormacaoMilitaryControlle = new AddFormacaoMilitaryController(
	new AddFormacaoMilitarService(new FormacaoMilitaryRepository()),
);

export default class FormacaoMilitary extends BaseRoute {
	public routes(routes: Router): void {
		routes.post(
			'/militares/:id/formacoes',
			validateData(addFormacaoMilitaryValidator),
			(request, response) => {
				new AddFormacaoMilitaryController(
					new AddFormacaoMilitarService(new FormacaoMilitaryRepository()),
				).handle(request, response);
			},
		);
		routes.get('/formacoes/militares', (request, response) => {
			new FindAllFormacaoMilitarController(
				new FindAllFormacaoMilitarService(
					new FormacaoMilitaryRepository(),
					new MilitarRepository(),
				),
			).handle(request, response);
		});
		routes.get('/formacoes', (request, response) => {
			new FindOneFormacaoMilitarController(
				new FindOneFormacaoMilitarService(new FormacaoMilitaryRepository()),
			).handle(request, response);
		});
	}
}
