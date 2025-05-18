import type { FindAllFormacaoMilitarService } from '../../services/formacaoMilitar/buscar-todas-formacao-militar-service';
import { BaseController } from '../base-controller';

export class BuscarTodasFormacaoMilitarController extends BaseController {
	constructor(findAllFormacaoMilitary: FindAllFormacaoMilitarService) {
		super(findAllFormacaoMilitary);
	}
}
