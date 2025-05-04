import { OperationCrud } from '../../constants/operation-crud';
import { BaseService } from '../base-service';
import type { MilitarRepository } from '../../repositories/militar-repository';
import { NotFoundError } from '../../utils/api-errors';

export type RemoverMilitarInput = {
	id: string;
};

export type RemoverMilitarOutPut = {
	id: string;
	nome: string;
	dataNascimento: Date;
	sexo: string;
	patente: string;
	situacaoMilitar: string;
	nacionalidade: string;
	estadoCivil: string;
	dataIncorporacao: Date;
	naturalidade: string;
	telefone1: string;
	telefone2: string;
	NIP: string;
	email: string;
};

export class RemoverMilitarService extends BaseService<
	RemoverMilitarInput,
	RemoverMilitarOutPut
> {
	constructor(private readonly militarRepository: MilitarRepository) {
		super(militarRepository, OperationCrud.DELETE);
	}

	public async execute(
		inputDTO: RemoverMilitarInput,
		user?: any,
	): Promise<RemoverMilitarOutPut> {
		const militar = await this.militarRepository.buscarPorId(inputDTO.id);

		if (!militar) {
			throw new NotFoundError('Militar não encontrado');
		}

		return await super.executeBase(inputDTO);
	}
}
