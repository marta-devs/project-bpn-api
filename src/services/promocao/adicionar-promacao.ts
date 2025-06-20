import type { Promocoes } from '../../../generated/prisma';
import { OperationCrud } from '../../constants/operation-crud';
import type { MilitarRepository } from '../../repositories/militar-repository';
import type { PromocaoRepositry } from '../../repositories/promocao-repository';
import type { UsuarioRepository } from '../../repositories/usuario-repositoy';
import {
	NotFoundError,
	UnprocessableEntityError,
} from '../../utils/api-errors';
import { BaseService } from '../base-service';

interface AddPromocaoInput {
	promocao: string;
	descricao: string;
	dataPromocao: Date;
	militarId: string;
}
interface AddPromocaoOutput {
	id: string;
	promocao: string;
	descricao: string;
	dataPromocao: Date;
	createdAt: Date;
	updatedAt: Date;
	militarId: string;
}
export class AdicionarPromocaoService extends BaseService<
	AddPromocaoInput,
	AddPromocaoOutput
> {
	constructor(
		private readonly promocaoRespository: PromocaoRepositry,
		private readonly usuarioRepository: UsuarioRepository,
		private readonly militarRepository: MilitarRepository,
	) {
		super(promocaoRespository, OperationCrud.CREATE);
	}
	public async execute(
		inputDTO: AddPromocaoInput,
		user?: any,
	): Promise<AddPromocaoOutput | undefined> {
		const usuario = await this.usuarioRepository.buscarPorMilitarId(
			inputDTO.militarId,
		);
		if (!usuario) {
			throw new NotFoundError('usuario nao encontrado');
		}
		if (usuario.funcao !== 'admin' && usuario.funcao !== 'gestor') {
			throw new UnprocessableEntityError(
				'Não é possível atribuir promoção ao militar devido ao sua funcao',
			);
		}
		const militar = await this.militarRepository.buscarPorId(usuario.militarId);
		if (!militar) {
			throw new NotFoundError('militar nao encontrado');
		}
		if (
			militar.situacaoMilitar === 'REMOVIDO' ||
			militar.situacaoMilitar === 'FALECIDO'
		) {
			throw new UnprocessableEntityError(
				'Não é possível atribuir promoção ao militar devido ao seu status',
			);
		}
		const newInput = {
			promocao: inputDTO.promocao,
			descricao: inputDTO.descricao,
			dataPromocao: inputDTO.dataPromocao,
			militarId: inputDTO.militarId,
		};
		return await this.promocaoRespository.criar(newInput);
	}
}
