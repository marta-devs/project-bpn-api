import type { FormacaoMilitaryRepository } from '@/repositories/formacao-militar-repository';
import { BaseService } from '../base-service';
import { OperationCrud } from '@/constants/operation-crud';
import { Usuario } from '../../../generated/prisma';
import type { MilitarRepository } from '@/repositories/militar-repository';
import { NotFoundError, UnprocessableEntityError } from '@/utils/api-errors';

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

export class AddFormacaoMilitarService extends BaseService<
	AddFormacaoMilitarInPut,
	AddFormacaoMilitarOutPut
> {
	constructor(
		formacaoMilitarRepository: FormacaoMilitaryRepository,
		private readonly militarRepository: MilitarRepository,
	) {
		super(formacaoMilitarRepository, OperationCrud.CREATE);
	}
	public async execute(
		inputDTO: AddFormacaoMilitarInPut,
		user?: any,
	): Promise<AddFormacaoMilitarOutPut> {
		const militar = await this.militarRepository.buscarPorId(
			inputDTO.militarId,
		);

		if (militar?.situacaoMilitar == null) {
			throw new NotFoundError('Militar nao encontrado');
		}
		if (
			militar.situacaoMilitar === 'REMOVIDO' ||
			militar.situacaoMilitar === 'FALECIDO'
		) {
			throw new UnprocessableEntityError(
				'Não é possível adicionar formação ao militar devido ao seu status atual',
			);
		}

		const result = await super.executeBase(inputDTO);
		return {
			id: result.id,
			curso: result.curso,
			instituicao: result.instituicao,
			data_inicio: result.dataInicio,
			data_fim: result.dataFim,
			militarId: result.militarId,
			createdAt: result.createdAt,
			updatedAt: result.updatedAt,
		};
	}
}
