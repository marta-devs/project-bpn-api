import type { AddCursoService } from '@/services/curso/add-curso-service';
import { BaseController } from '../base-controller';
import { autoInjectable, inject, injectable } from 'tsyringe';
import { BaseService } from '@/services/base-service';

export class AdicionarCursoController extends BaseController {
	constructor(addCursoService: AddCursoService) {
		super(addCursoService);
	}
}
