import jwt from 'jsonwebtoken';
import { NotFoundError, UnauthorizedError } from '../../utils/api-errors';
import jwtConfig from '../../configs/jwt-config';
import type { MilitarRepository } from '../../repositories/militar-repository';
export interface LoginRepositoryInPut {
	login: string;
	password: string;
}
export interface LoginRepositoryOutPut {
	usuario: object;
	accessToken: string;
}

export class LogService {
	constructor(private readonly militarRepository: MilitarRepository) {}
	public async logar(
		loginRepositoryInPut: LoginRepositoryInPut,
	): Promise<LoginRepositoryOutPut | null | undefined> {
		const militar = (await this.militarRepository.buscarPorNIP(
			loginRepositoryInPut.login,
		))
			? await this.militarRepository.buscarPorNIP(loginRepositoryInPut.login)
			: await this.militarRepository.buscarPorUsername(
					loginRepositoryInPut.login,
				);
		if (!militar) {
			throw new NotFoundError('militar ou usuario nao encontrado');
		}

		if (
			loginRepositoryInPut.login !== militar.username &&
			loginRepositoryInPut.login !== militar.NIP
		) {
			throw new UnauthorizedError('credenciais invalidas 11');
		}

		if (loginRepositoryInPut.password !== militar.password) {
			throw new UnauthorizedError('credenciais invalidas 22');
		}
		const token = jwt.sign({ userId: militar.id }, jwtConfig.secret, {
			expiresIn: jwtConfig.expiresIn,
		});
		const { password, ...usuario } = militar;
		return {
			usuario,
			accessToken: token,
		};
	}
}
