import type { AdicionarPromocaoService } from '../../services/promocao/adicionar-promacao';
import { BaseController } from '../base-controller';

export class AdicionarPromocaoController extends BaseController {
	constructor(adicionarPromocaoService: AdicionarPromocaoService) {
		super(adicionarPromocaoService);
	}
}
