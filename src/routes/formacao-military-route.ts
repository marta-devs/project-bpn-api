import type { Router } from 'express';
import { BaseRoute } from './base.routes';
import { AddFormacaoMilitaryController } from '../controllers/formacao military/adicionar-formacao-militar-controller';
import { AdicionarFormacaoMilitarService } from '../services/formacaoMilitar/adicionar-formacao-militar-service';
import { FormacaoMilitaryRepository } from '../repositories/formacao-militar-repository';
import { validateData } from '../middlewares/validation';
import { addFormacaoMilitaryValidator } from '../validators/formacao-militar/formacao-militar-validator';
import { BuscarTodasFormacaoMilitarController } from '../controllers/formacao military/buscar-todas-formacao-militar-controller';
import { BuscarTodasFormacaoMilitarService } from '../services/formacaoMilitar/buscar-todas-formacao-militar-service';
import { BuscarUmaFormacaoMilitarService } from '../services/formacaoMilitar/buscar-uma-formacao-militar-service';
import { BuscarUmaFormacaoMilitarController } from '../controllers/formacao military/buscar-uma-formacao-militar-controller ';
import { MilitarRepository } from '../repositories/militar-repository';

const addFormacaoMilitaryControlle = new AddFormacaoMilitaryController(
	new AdicionarFormacaoMilitarService(new FormacaoMilitaryRepository()),
);

export default class FormacaoMilitary extends BaseRoute {
	public routes(routes: Router): void {
		routes.post(
			'/militar/:id/formacoes',
			validateData(addFormacaoMilitaryValidator),
			(request, response) => {
				new AddFormacaoMilitaryController(
					new AdicionarFormacaoMilitarService(new FormacaoMilitaryRepository()),
				).handle(request, response);
			},
		);
		routes.get('/militar/:id/formacoes', (request, response) => {
			new BuscarTodasFormacaoMilitarController(
				new BuscarTodasFormacaoMilitarService(
					new FormacaoMilitaryRepository(),
					new MilitarRepository(),
				),
			).handle(request, response);
		});
		routes.get('/formacao/:id', (request, response) => {
			new BuscarUmaFormacaoMilitarController(
				new BuscarUmaFormacaoMilitarService(new FormacaoMilitaryRepository()),
			).handle(request, response);
		});
	}
}
