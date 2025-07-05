import type { ActulizarPromocaoService } from '../../services/promocao/actualizar-promocao-service';
import { BaseController } from '../base-controller';

export class ActulizarPromocaoController extends BaseController {
	constructor(actualizarPromocaoService: ActulizarPromocaoService) {
		super(actualizarPromocaoService);
	}
}
