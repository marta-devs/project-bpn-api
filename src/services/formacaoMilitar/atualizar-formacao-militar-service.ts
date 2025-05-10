import { OperationCrud } from '../../constants/operation-crud';
import type { FormacaoMilitaryRepository } from '../../repositories/formacao-militar-repository';
import type { MilitarRepository } from '../../repositories/militar-repository';
import {
	NotFoundError,
	UnprocessableEntityError,
} from '../../utils/api-errors';
import { BaseService } from '../base-service';

export class AtualizarFormacaoMilitarService extends BaseService {
	constructor(
		private readonly formacaoMilitarRepository: FormacaoMilitaryRepository,
		private readonly militaryRepository: MilitarRepository,
	) {
		super(formacaoMilitarRepository, OperationCrud.UPDATE);
	}
	public async execute(inputDTO: any, user?: any): Promise<any> {
		const formacaoMilitar = await this.formacaoMilitarRepository.buscarPorId(
			inputDTO.id,
		);
		if (!formacaoMilitar) {
			throw new NotFoundError('formacao Militar nao encontrada');
		}
		const militar = await this.militaryRepository.buscarPorId(
			formacaoMilitar.militarId,
		);

		if (militar?.situacaoMilitar !== 'ATIVO') {
			throw new UnprocessableEntityError(
				'Não é possível editar formação do militar devido ao seu status atual',
			);
		}

		return this.executeBase(inputDTO);
	}
}
