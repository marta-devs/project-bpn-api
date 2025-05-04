import { FormacaoMilitaryRepository } from '@/repositories/formacao-militar-repository';
import { FormacoesMilitares, Militar } from '../../../generated/prisma';
import { BaseService } from '../base-service';
import { OperationCrud } from '@/constants/operation-crud';

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
export class FindAllFormacaoMilitarService extends BaseService<
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
		return {
			id: formacoesMilitares.id,
			curso: formacoesMilitares.curso,
			instituicao: formacoesMilitares.instituicao,
			dataInicio: formacoesMilitares.dataInicio,
			dataFim: formacoesMilitares.dataFim,
			militarId: formacoesMilitares.militarId,
			createdAt: formacoesMilitares.createdAt,
			updatedAt: formacoesMilitares.updatedAt,
		};
	}
}
