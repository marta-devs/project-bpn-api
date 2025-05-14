import type { BuscarTodosMilitaresService } from '../../services/militar/buscar-todos-militares-service';
import { BaseController } from '../base-controller';

export class BuscarTodosMilitaresController extends BaseController {
	constructor(buscarTodosMilitaresService: BuscarTodosMilitaresService) {
		super(buscarTodosMilitaresService);
	}
}
