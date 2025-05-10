import type { AdicionarFormacaoMilitarService } from '../../services/formacaoMilitar/adicionar-formacao-militar-service';
import { BaseController } from '../base-controller';

export class AddFormacaoMilitaryController extends BaseController {
	constructor(addFormacaoMilitarService: AdicionarFormacaoMilitarService) {
		super(addFormacaoMilitarService);
	}
}
