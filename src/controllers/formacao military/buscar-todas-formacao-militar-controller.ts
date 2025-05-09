import type { FindAllFormacaoMilitarService } from '../../services/formacaoMilitar/find-all-formacao-militar-service';
import { BaseController } from '../base-controller';

export class BuscarTodasFormacaoMilitarController extends BaseController {
	constructor(findAllFormacaoMilitary: FindAllFormacaoMilitarService) {
		super(findAllFormacaoMilitary);
	}
}
