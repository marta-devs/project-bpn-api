import { OperationCrud } from '../../constants/operation-crud';
import type { FormacaoMilitaryRepository } from '../../repositories/formacao-militar-repository';
import type { MilitarRepository } from '../../repositories/militar-repository';
import {
	NotFoundError,
	UnprocessableEntityError,
} from '../../utils/api-errors';
import { BaseService } from '../base-service';

interface ActualizarFormacaoMilitarInput {
	id: string;
	curso: string;
	instituicao: string;
	dataInicio: Date;
	dataFim: string;
}
interface ActualizarFormacaoMilitarOutput {
	id: string;
	curso: string;
	instituicao: string;
	dataInicio: Date;
	dataFim: Date;
	militarId: string;
	createdAt: Date;
	updatedAt: Date;
}

export class AtualizarFormacaoMilitarService extends BaseService<
	ActualizarFormacaoMilitarInput,
	ActualizarFormacaoMilitarOutput
> {
	constructor(
		private readonly formacaoMilitarRepository: FormacaoMilitaryRepository,
		private readonly militaryRepository: MilitarRepository,
	) {
		super(formacaoMilitarRepository, OperationCrud.UPDATE);
	}
	public async execute(
		inputDTO: ActualizarFormacaoMilitarInput,
		user?: any,
	): Promise<any> {
		const { id, ...corpoRequesicao } = inputDTO;
		console.log('formacao id', id.id);
		const formacaoMilitar = await this.formacaoMilitarRepository.buscarPorId(
			id.id,
		);

		if (!formacaoMilitar) {
			throw new NotFoundError('formacao Militar nao encontrada');
		}
		const militar = await this.militaryRepository.buscarPorId(
			formacaoMilitar.militarId,
		);
		if (!militar) {
			throw new NotFoundError('Militar não encontrado');
		}
		if (militar.situacaoMilitar !== 'ACTIVO') {
			throw new UnprocessableEntityError(
				'Não é possível editar formação do militar devido ao seu status atual',
			);
		}
		const newInput: ActualizarFormacaoMilitarInput = {
			id: formacaoMilitar.id,
			curso: inputDTO.curso,
			instituicao: inputDTO.instituicao,
			dataInicio: inputDTO.dataInicio,
			dataFim: inputDTO.dataFim,
		};
		return this.executeBase(newInput);
	}
}
