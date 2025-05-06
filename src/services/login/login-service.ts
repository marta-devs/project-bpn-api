import type { UsuarioRepository } from '@/repositories/usuario-repositoy';
import { BaseService } from '../base-service';
import { OperationCrud } from '@/constants/operation-crud';
import jwt from 'jsonwebtoken';
import {
	BadRequestError,
	NotFoundError,
	UnauthorizedError,
} from '@/utils/api-errors';
import { throwDeprecation } from 'process';
import jwtConfig from '@/configs/jwt-config';

export interface LoginRepositoryInPut {
	username: string;
	email?: string;
	password: string;
}
export interface LoginRepositoryOutPut {
	id: string;
	username: string;
	password: string;
	status: string;
	qrcode: string;
	funcao: string;
	militarId: string;
	createdAt: Date;
	updatedAt: Date;
	accessToken: string;
}

export class LogService {
	constructor(private readonly usuarioRepository: UsuarioRepository) {}
	public async logar(
		loginRepositoryInPut: LoginRepositoryInPut,
	): Promise<LoginRepositoryOutPut | null> {
		try {
			const usuario = await this.usuarioRepository.buscarPorUsername(
				loginRepositoryInPut.username,
			);
			/*const hashPassword = bcrypt;*/
			if (!usuario) {
				throw new NotFoundError('usuario nao encontrado!');
			}
			if (loginRepositoryInPut.username !== usuario.username) {
				throw new UnauthorizedError('Credencias invalidas');
			}
			if (loginRepositoryInPut.password !== usuario.password) {
				throw new UnauthorizedError('Credencias invalidas');
			}
			const token = jwt.sign({ userId: usuario.id }, jwtConfig.secret, {
				subject: 'acessApi ',
				expiresIn: jwtConfig.expiresIn,
			});
			return {
				...usuario,
				accessToken: token,
			};
		} catch (error) {
			throw new BadRequestError(`mensagem${error}`);
		}
	}
}
