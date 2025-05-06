import type { RemoverMilitarService } from '../../services/militar/remover-militar-service';
import { BaseController } from '../base-controller';

export class RemoverMilitarController extends BaseController {
	constructor(removerMilitarService: RemoverMilitarService) {
		super(removerMilitarService);
	}
}
