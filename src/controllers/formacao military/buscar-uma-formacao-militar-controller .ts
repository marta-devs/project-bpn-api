import type { BuscarUmaFormacaoMilitarService } from '../../services/formacaoMilitar/buscar-uma-formacao-militar-service';
import { BaseController } from '../base-controller';

export class BuscarUmaFormacaoMilitarController extends BaseController {
	constructor(findOneFormacaoMilitaryServe: BuscarUmaFormacaoMilitarService) {
		super(findOneFormacaoMilitaryServe);
	}
}
