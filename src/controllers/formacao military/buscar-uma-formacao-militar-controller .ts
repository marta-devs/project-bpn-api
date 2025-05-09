import type { FindOneFormacaoMilitarService } from '../../services/formacaoMilitar/find-one-formacao-militar-service';
import { BaseController } from '../base-controller';

export class FindOneFormacaoMilitarController extends BaseController {
	constructor(findOneFormacaoMilitaryServe: FindOneFormacaoMilitarService) {
		super(findOneFormacaoMilitaryServe);
	}
}
