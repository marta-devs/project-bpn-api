import type { AdicionarPromocaoService } from '../../services/promocao/adicionar-promacao-service';
import { BaseController } from '../base-controller';

export class AdicionarPromocaoController extends BaseController {
	constructor(adicionarPromocaoService: AdicionarPromocaoService) {
		super(adicionarPromocaoService);
	}
}
