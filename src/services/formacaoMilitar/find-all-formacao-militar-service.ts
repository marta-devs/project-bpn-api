import type { FormacaoMilitaryRepository } from '../../repositories/formacao-militar-repository';
import { FormacoesMilitares, Militar } from '../../../generated/prisma';
import { BaseService } from '../base-service';
import { OperationCrud } from '../../constants/operation-crud';
import type { MilitarRepository } from '../../repositories/militar-repository';
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
export class FindAllFormacaoMilitarService extends BaseService<
	FormacoesMilitaresInPut,
	FormacoesMilitaresOutPut
> {
	constructor(
		formacoesMilitarRepository: FormacaoMilitaryRepository,
		private readonly militarRepository: MilitarRepository,
	) {
		super(formacoesMilitarRepository, OperationCrud.READ);
	}
	public async execute(
		inputDTO: FormacoesMilitaresInPut,
		user?: any,
	): Promise<FormacoesMilitaresOutPut> {
		console.log(user);
		const militar = await this.militarRepository.buscarPorId(user.id);
		if (!militar) {
			throw new NotFoundError('militar nao encontrado');
		}
		const formacaoMilitar = await super.executeBase(inputDTO);
		return formacaoMilitar;
	}
}
