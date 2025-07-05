import type { FormacaoMilitaryRepository } from '../../repositories/formacao-militar-repository';
import { BaseService } from '../base-service';
import { OperationCrud } from '../../constants/operation-crud';
import { NotFoundError } from '../../utils/api-errors';
import type { PromocaoRepositry } from '../../repositories/promocao-repository';

export interface BuscarPromocaoInPut {
	id: string;
}
export interface BuscarPromocaoOutPut {
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
	BuscarPromocaoInPut,
	BuscarPromocaoOutPut
> {
	constructor(private readonly promocaoRepository: PromocaoRepositry) {
		super(promocaoRepository, OperationCrud.FIND);
	}
	public async execute(
		inputDTO: any,
		user?: any,
	): Promise<BuscarPromocaoOutPut> {
		const formacoesMilitares = await super.executeBase(inputDTO);
		if (!formacoesMilitares) {
			throw new NotFoundError('Formação não encontrada');
		}
		return formacoesMilitares;
	}
}
