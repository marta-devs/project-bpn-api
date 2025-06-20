import { response, type Router } from 'express';
import { BaseRoute } from './base.routes';
import { AdicionarPromocaoController } from '../controllers/promocao/adicionar-promocao-controller';
import { AdicionarPromocaoService } from '../services/promocao/adicionar-promacao-service';
import { UsuarioRepository } from '../repositories/usuario-repositoy';
import { MilitarRepository } from '../repositories/militar-repository';
import { PromocaoRepositry } from '../repositories/promocao-repository';

export default class PromocaoRoutes extends BaseRoute {
	public routes(routes: Router): void {
		routes.post('/promocao/:militar_id', (request, response) => {
			new AdicionarPromocaoController(
				new AdicionarPromocaoService(
					new PromocaoRepositry(),
					new UsuarioRepository(),
					new MilitarRepository(),
				),
			).handle(request, response);
		});
	}
}
