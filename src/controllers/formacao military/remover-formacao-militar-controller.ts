import type { RemoverFormacaoMilitarService } from '../../services/formacaoMilitar/remover-formacao-militar-service';
import { BaseController } from '../base-controller';

export class RemoverFormacaoMilitarController extends BaseController {
	constructor(formacaoMilitarService: RemoverFormacaoMilitarService) {
		super(formacaoMilitarService);
	}
}
