import type { FormacaoMilitaryRepository } from '../../repositories/formacao-militar-repository';
import { BaseService } from '../base-service';
import { OperationCrud } from '../../constants/operation-crud';
import {
	ConflictError,
	NotFoundError,
	UnprocessableEntityError,
} from '../../utils/api-errors';
import type { MilitarRepository } from '../../repositories/militar-repository';
import { array } from 'zod';

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
	datai_inicio: Date;
	data_fim: Date;
	militarId: string;
	createdAt: Date;
	updatedAt: Date;
}
export class AdicionarFormacaoMilitarService extends BaseService<
	AddFormacaoMilitarInPut,
	AddFormacaoMilitarOutPut
> {
	constructor(
		private readonly formacaoMilitarRepository: FormacaoMilitaryRepository,
		private readonly militarRepository: MilitarRepository,
	) {
		super(formacaoMilitarRepository, OperationCrud.CREATE);
	}
	public async execute(
		inputDTO: AddFormacaoMilitarInPut,
		user?: any,
	): Promise<AddFormacaoMilitarOutPut | any> {
		const militar = await this.militarRepository.buscarPorId(
			inputDTO.militarId,
		);
		if (!militar) {
			throw new NotFoundError('Militar não encontrado');
		}
		if (
			militar.situacaoMilitar === 'REMOVIDO' ||
			militar.situacaoMilitar === 'FALECIDO'
		) {
			throw new UnprocessableEntityError(
				'Não é possível adicionar formação ao militar devido ao seu status atual',
			);
		}
		if (
			militar.situacaoMilitar !== 'REMOVIDO' &&
			militar.situacaoMilitar !== 'FALECIDO' &&
			militar.situacaoMilitar !== 'ACTIVO' &&
			militar.situacaoMilitar !== 'ATIVO' &&
			militar.situacaoMilitar !== 'Ativo' &&
			militar.situacaoMilitar !== 'Activo' &&
			militar.situacaoMilitar !== 'activo' &&
			militar.situacaoMilitar !== 'ativo'
		) {
			throw new UnprocessableEntityError(
				'Não é possível adicionar formação ao militar devido ao seu status atual',
			);
		}
		const formacaMilitar =
			await this.formacaoMilitarRepository.buscarFormacaoMilitarPorIdMilitar(
				militar.id,
			);
		formacaMilitar?.map((f) => {
			if (f.curso === inputDTO.curso) {
				throw new ConflictError('Formação já cadastrada para este militar');
			}
		});

		const result = await this.formacaoMilitarRepository.criar(inputDTO);
		return result;
	}
}
