import { OperationCrud } from '@/constants/operation-crud';
import { BaseService } from '../base-service';
import { inject, injectable } from 'tsyringe';
import { DAOGenerico } from '@/repositories/DAO';
import { CursoRepository } from '@/repositories/curso-respository';

export type AddCursoInput = {
	id: string;
	nome: string;
	descricao: string;
	tipoCurso: string;
};

export type AddCursoOutPut = {
	id: string;
	nome: string;
	descricao: string;
	tipoCurso: string;
};

export class AddCursoService extends BaseService<
	AddCursoInput,
	AddCursoOutPut
> {
	constructor(cursoRepository: CursoRepository) {
		super(cursoRepository, OperationCrud.CREATE);
	}

	public async execute(
		inputDTO: AddCursoInput,
		user?: any,
	): Promise<AddCursoInput> {
		const result = await super.executeBase(inputDTO);
		return {
			id: result.id,
			nome: result.nome,
			descricao: result.descricao,
			tipoCurso: result.tipoCurso,
		};
	}
}
