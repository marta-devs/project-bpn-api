import type { UsuarioRepository } from '../../repositories/usuario-repositoy';
import jwt from 'jsonwebtoken';
import {
	BadRequestError,
	NotFoundError,
	UnauthorizedError,
} from '../../utils/api-errors';
import jwtConfig from '../../configs/jwt-config';
import bcrypt from 'bcrypt';
import { MilitarRepository } from '../../repositories/militar-repository';
export interface LoginRepositoryInPut {
	username: string;
	email: string;
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
	constructor(
		private readonly usuarioRepository: UsuarioRepository,
		private readonly militarRepository: MilitarRepository,
	) {}
	public async logar(
		loginRepositoryInPut: LoginRepositoryInPut,
	): Promise<LoginRepositoryOutPut | null> {
		try {
			if (loginRepositoryInPut.username) {
				const usuario = await this.usuarioRepository.buscarPorUsername(
					loginRepositoryInPut.username,
				);
				if (!usuario) {
					throw new NotFoundError('usuario nao encontrado!');
				}

				if (loginRepositoryInPut.username !== usuario.username) {
					throw new UnauthorizedError('Credencias invalidas ');
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
			}

			if (loginRepositoryInPut.email) {
				const militar = await this.militarRepository.buscarPorEmailMilitar(
					loginRepositoryInPut.email,
				);
				console.log(militar);
				console.log(loginRepositoryInPut.email);
				if (militar) {
					const usuario = await this.usuarioRepository.buscarPorMilitarId(
						militar.id,
					);
					if (loginRepositoryInPut.email !== militar.email) {
						throw new UnauthorizedError('Credencias invalidas ');
					}
					if (loginRepositoryInPut.password !== usuario?.password) {
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
				}
			}
		} catch (error) {
			throw new BadRequestError(`mensagem${error}`);
		}
	}
}
