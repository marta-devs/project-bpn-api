import { OperationCrud } from '../../constants/operation-crud';
import { BaseService } from '../base-service';
import type { MilitarRepository } from '../../repositories/militar-repository';

export type BuscarTodosMilitaresInput = {
	nome: string;
	dataNascimento: Date;
	sexo: string;
	patente: string;
	situacaoMilitar: string;
	nacionalidade: string;
	estadoCivil: string;
	dataIncorporacao: Date;
	naturalidade: string;
	telefone1: string;
	telefone2: string;
	NIP: string;
	email: string;
	dadosPessoais: {
		filiacaoPaterna: string;
		filiacaoMaterna: string;
		numeroBI: string;
		numeroSegurancaSocial: string;
		numeroPassaporte: string;
		quantidadeFilho: string;
		nomeEsposa: string;
	};
};

export type BuscarTodosMilitaresOutPut = {
	id: string;
	nome: string;
	dataNascimento: Date;
	sexo: string;
	patente: string;
	situacaoMilitar: string;
	nacionalidade: string;
	estadoCivil: string;
	dataIncorporacao: Date;
	naturalidade: string;
	telefone1: string;
	telefone2: string;
	NIP: string;
	email: string;
	dadosPessoais: {
		filiacaoPaterna: string;
		filiacaoMaterna: string;
		numeroBI: string;
		numeroSegurancaSocial: string;
		numeroPassaporte: string;
		quantidadeFilho: string;
		nomeEsposa: string;
	};
};

export class BuscarTodosMilitaresService extends BaseService<
	BuscarTodosMilitaresInput,
	BuscarTodosMilitaresOutPut
> {
	constructor(militarRepository: MilitarRepository) {
		super(militarRepository, OperationCrud.READ);
	}

	public async execute(
		inputDTO: BuscarTodosMilitaresInput,
		user?: any,
	): Promise<BuscarTodosMilitaresOutPut[]> {
		return await super.executeBase(inputDTO, {
			endereco: true,
			dadosPessoais: true,
			Promocoes: true,
			FormacoesAcademicas: true,
			FormacoesMilitares: true,
			Especializacoes: true,
			ContactoEmergencia: true,
		});
	}
}
