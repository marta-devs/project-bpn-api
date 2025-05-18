import type { FormacaoMilitaryRepository } from '../../repositories/formacao-militar-repository';
import { BaseService } from '../base-service';
import { OperationCrud } from '../../constants/operation-crud';

export interface AddFormacaoMilitarInPut {
	id?: string;
	curso: string;
	instituicao: string;
	data_inicio: string;
	data_fim: string;
	militarId: string;
}

export interface AddFormacaoMilitarOutPut {
	id: string;
	curso: string;
	instituicao: string;
	data_inicio: string;
	data_fim: string;
	militarId: string;
	createdAt: Date;
	updatedAt: Date;
}
export class AdicionarFormacaoMilitarService extends BaseService<
	AddFormacaoMilitarInPut,
	AddFormacaoMilitarOutPut
> {
	constructor(formacaoMilitar: FormacaoMilitaryRepository) {
		super(formacaoMilitar, OperationCrud.CREATE);
	}
	public async execute(
		inputDTO: AddFormacaoMilitarInPut,
		user?: any,
		params?: any,
	): Promise<AddFormacaoMilitarOutPut> {
		console.log(inputDTO);
		const input = {
			...inputDTO,
			militarId: params,
		};
		console.log(input);
		const result = await super.executeBase(input);
		return result;
	}
}
