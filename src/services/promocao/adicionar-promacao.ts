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

export class AdicionarPromocaoService extends BaseService<Promocoes> {
	constructor(
		private readonly promocaoRespository: PromocaoRepositry,
		private readonly usuarioRepository: UsuarioRepository,
		private readonly militarRepository: MilitarRepository,
	) {
		super(promocaoRespository, OperationCrud.CREATE);
	}
	public async execute(
		inputDTO: {
			id: string;
			promocao: string;
			descricao: string;
			dataPromocao: Date;
			createdAt: Date;
			updatedAt: Date;
			militarId: string;
		},
		user?: any,
	): Promise<any | any> {
		const usuario = await this.usuarioRepository.buscarPorId();
		if (!usuario) {
			throw new NotFoundError('usuario nao encontrado');
		}
		if (usuario.funcao === 'admin' || usuario.funcao === 'gestor') {
			const militar = await this.militarRepository.buscarPorId(
				inputDTO.militarId,
			);
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
			return await this.promocaoRespository.criar(inputDTO);
		}
	}
}
