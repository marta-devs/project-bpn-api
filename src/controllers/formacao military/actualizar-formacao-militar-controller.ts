import type { AtualizarFormacaoMilitarService } from '../../services/formacaoMilitar/update-formacao-militar-service';
import { BaseController } from '../base-controller';

export class AtualizarFormcaoMilitarController extends BaseController {
	constructor(atualizarFormacaoMilitar: AtualizarFormacaoMilitarService) {
		super(atualizarFormacaoMilitar);
	}
}
