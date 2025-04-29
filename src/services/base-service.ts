import { OperationCrud } from '@/constants/operation-crud';
import type { DAOGenerico } from '@/repositories/DAO';

export abstract class BaseService<InputDTO = any, OutputDTO = any> {
	constructor(
		private readonly daoGenerico: DAOGenerico,
		public operationCrud: OperationCrud,
	) {}

	public abstract execute(inputDTO: InputDTO, user?: any): Promise<OutputDTO>;

	protected async executeBase(input: any, include?: any): Promise<any> {
		switch (this.operationCrud) {
			case OperationCrud.CREATE:
				return this.executeCreate(input);
			case OperationCrud.UPDATE:
				return this.executeUpdate(input);
			case OperationCrud.READ:
				return this.executeRead({ input, include });
			case OperationCrud.FIND:
				return this.executeFind(input);
			case OperationCrud.DELETE:
				return this.executeDelete(input);
			default:
				throw new Error('Erro ao não seguir o padrão do projecto');
		}
	}

	private async executeDelete(input: any): Promise<any> {
		return await this.daoGenerico.excluir(input.id);
	}

	private async executeUpdate(input: any): Promise<any> {
		const { id, ...resto } = input;
		return await this.daoGenerico.atualizar(input.id, resto);
	}

	private async executeFind(input: any): Promise<any> {
		return await this.daoGenerico.excluir(input.id);
	}

	private async executeRead(input: any): Promise<any> {
		const filtros = input.includes;
		return filtros
			? await this.daoGenerico.buscarTodos(filtros)
			: await this.daoGenerico.buscarTodos();
	}

	private async executeCreate(input: any): Promise<any> {
		return await this.daoGenerico.criar(input);
	}
}
