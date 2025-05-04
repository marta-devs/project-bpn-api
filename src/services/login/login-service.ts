import type { UsuarioRepository } from '@/repositories/usuario-repositoy';
import { BaseService } from '../base-service';
import { OperationCrud } from '@/constants/operation-crud';

export interface LoginRepositoryInPut {
	email: string;
	password: string;
}
export interface LoginRepositoryOutPut {
	message: string;
}

export class LoginService {
	constructor(private readonly usuarioRepository: UsuarioRepository) {}
	public async logar(
		loginRepositoryInPut: LoginRepositoryInPut,
	): Promise<LoginRepositoryOutPut> {}
}
