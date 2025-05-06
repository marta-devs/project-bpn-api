import type {
	LoginRepositoryOutPut,
	LogService,
} from '@/services/login/login-service';
import { ok } from '@/utils/http-helper';
import type { Request, Response } from 'express';

export class LogController {
	constructor(private readonly logService: LogService) {}
	public async handle(request: Request, response: Response) {
		const dados = request.body;
		console.log(dados);
		const usuario = await this.logService.logar(dados);
		return ok(response, usuario, 'login realizado com sucesso');
	}
}
