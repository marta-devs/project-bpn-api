import { OperationCrud } from '../../constants/operation-crud';
import type { FormacaoMilitaryRepository } from '../../repositories/formacao-militar-repository';
import { NotFoundError } from '../../utils/api-errors';
import { BaseService } from '../base-service';

export class RemoverFormacaoMilitarService extends BaseService {
	constructor(
		private readonly formacaoMilitarRepository: FormacaoMilitaryRepository,
	) {
		super(formacaoMilitarRepository, OperationCrud.DELETE);
	}
	public async execute(inputDTO: any, user?: any): Promise<any | any> {
		const formacaoMilitar = await this.formacaoMilitarRepository.buscarPorId(
			inputDTO.id,
		);
		if (!formacaoMilitar) {
			throw new NotFoundError('Formação não encontrada');
		}
		return this.executeBase(inputDTO);
	}
}
