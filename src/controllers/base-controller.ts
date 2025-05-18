import { OperationCrud } from '../constants/operation-crud';
import type { BaseService } from '../services/base-service';
import { ApiError } from '../utils/api-errors';
import { created, noContent, ok, responseError } from '../utils/http-helper';
import type { Request, Response } from 'express';

export abstract class BaseController {
	constructor(private readonly baseService: BaseService) {}

	async handle(request: Request, response: Response): Promise<any> {
		switch (this.baseService.operationCrud as OperationCrud) {
			case OperationCrud.CREATE:
				return await this.handleCreate(request, response);
			case OperationCrud.DELETE:
				return await this.handleDelete(request, response);
			case OperationCrud.FIND:
				return await this.handleFind(request, response);
			case OperationCrud.READ:
				return await this.handleRead(request, response);
			case OperationCrud.UPDATE:
				return await this.handleUpdate(request, response);
			default:
				return response.json({ mensagem: 'segue o padrão do projecto' });
		}
	}

	private async handleDelete(request: Request, response: Response) {
		try {
			const paramentros = request.params;
			await this.baseService.execute({ ...paramentros });
			return noContent(response, 'Dados deletado com Sucesso');
		} catch (error: any) {
			return responseError(response, error);
		}
	}

	private async handleFind(request: Request, response: Response) {
		try {
			const paramentros = request.params;

			const resultado = await this.baseService.execute({ ...paramentros });

			return ok(
				response,
				{ data: { ...resultado } },
				'Dados buscado com sucesso',
			);
		} catch (error: any) {
			return responseError(response, error);
		}
	}

	private async handleRead(request: Request, response: Response) {
		try {
			const query = request.query;
			const params = request.params;
			const resultados = await this.baseService.execute(
				{
					filtros: { ...query },
				},
				params,
			);

			return ok(
				response,
				{ data: [...resultados] },
				'Dados buscados com sucesso',
			);
		} catch (error: any) {
			return responseError(response, error);
		}
	}

	private async handleCreate(request: Request, response: Response) {
		try {
			const corpoRequisicao = request.body;
			const user = request.user;
			const params = request.params.id;

			console.log(params);

			const resultado = await this.baseService.execute(
				{ ...corpoRequisicao },
				user,
				params,
			);

			return created(response, { data: resultado }, 'Dado criado com sucesso');
		} catch (error: any) {
			return responseError(response, error);
		}
	}

	private async handleUpdate(request: Request, response: Response) {
		try {
			const paramentro = request.params;
			const corpoRequisicao = request.body;
			const user = request.user;

			const resultado = await this.baseService.execute(
				{ id: paramentro, ...corpoRequisicao },
				user,
			);

			return ok(
				response,
				{ data: { ...resultado } },
				'Dado atualizado com sucesso',
			);
		} catch (error: any) {
			return responseError(response, error);
		}
	}
}
