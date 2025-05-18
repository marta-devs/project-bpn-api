import type { AtualizarFormacaoMilitarService } from '../../services/formacaoMilitar/atualizar-formacao-militar-service';
import { BaseController } from '../base-controller';

export class AtualizarFormcaoMilitarController extends BaseController {
	constructor(atualizarFormacaoMilitar: AtualizarFormacaoMilitarService) {
		super(atualizarFormacaoMilitar);
	}
}
