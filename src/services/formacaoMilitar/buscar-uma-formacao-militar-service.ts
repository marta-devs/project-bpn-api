import type { FormacaoMilitaryRepository } from '../../repositories/formacao-militar-repository';
import { BaseService } from '../base-service';
import { OperationCrud } from '../../constants/operation-crud';
import { NotFoundError } from '../../utils/api-errors';

export interface FormacoesMilitaresInPut {
	id: string;
}
export interface FormacoesMilitaresInPut {
	id: string;
}
export interface FormacoesMilitaresOutPut {
	id: string;
	curso: string;
	instituicao: string;
	dataInicio: Date;
	dataFim: Date;
	militarId: string;
	createdAt: Date;
	updatedAt: Date;
}
export class BuscarUmaFormacaoMilitarService extends BaseService<
	FormacoesMilitaresInPut,
	FormacoesMilitaresOutPut
> {
	constructor(formacoesMilitarRepository: FormacaoMilitaryRepository) {
		super(formacoesMilitarRepository, OperationCrud.FIND);
	}
	public async execute(
		inputDTO: any,
		user?: any,
	): Promise<FormacoesMilitaresOutPut> {
		const formacoesMilitares = await super.executeBase(inputDTO);
		if (!formacoesMilitares) {
			throw new NotFoundError('Formação não encontrada');
		}
		return formacoesMilitares;
	}
}
