import type { FormacaoMilitaryRepository } from '../../repositories/formacao-militar-repository';
import type { FormacoesMilitares } from '../../../generated/prisma';
import { BaseService } from '../base-service';
import { OperationCrud } from '../../constants/operation-crud';
import type { MilitarRepository } from '../../repositories/militar-repository';
import { NotFoundError } from '../../utils/api-errors';

export interface FormacoesMilitaresInPut {
	id: string;
}
export interface FormacoesMilitaresOutPut {
	id: string;
	curso: string;
	instituicao: string;
	dataInicio: string;
	dataFim: string;
	militarId: string;
	createdAt: Date;
	updatedAt: Date;
}
export class BuscarTodasFormacaoMilitarService extends BaseService<
	FormacoesMilitaresInPut,
	FormacoesMilitaresOutPut
> {
	constructor(
		private readonly formacoesMilitarRepository: FormacaoMilitaryRepository,
		private readonly militarRepository: MilitarRepository,
	) {
		super(formacoesMilitarRepository, OperationCrud.READ);
	}
	public async execute(
		inputDTO: FormacoesMilitaresInPut,
		user?: any,
	): Promise<FormacoesMilitares[] | null> {
		const militar = await this.militarRepository.buscarPorId(user.id);
		if (!militar) {
			throw new NotFoundError('militar nao encontrado');
		}
		const formacaoMilitar =
			await this.formacoesMilitarRepository.buscarFormacaoMilitarPorIdMilitar(
				militar.id,
			);
		return formacaoMilitar;
	}
}
