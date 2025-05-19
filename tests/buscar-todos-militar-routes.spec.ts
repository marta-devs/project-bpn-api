import { expect, test, describe, beforeEach } from 'vitest';
import request from 'supertest';
import { ExpressAdapter } from '../src/libs/express';
import { deleteTableAll } from '../src/libs/prisma';
import { createFakeMilitar } from './helpers/create-fake-militar';

const express = new ExpressAdapter();

describe('BuscarMilitarTodosRoutes', () => {
	beforeEach(async () => {
		await deleteTableAll();
	});

	test('should route GET /militares return 200 on sucess', async () => {
		const militares = await createFakeMilitar();
		const url = '/api/v1/militares';
		const response = await request(express.app).get(url);
		expect(response.status).toBe(200);
		expect(response.body.message).toBe('Dados buscados com sucesso');
		expect(response.body.data[0]).toEqual({
			id: militares.militar.id,
			nome: 'any_nome',
			nomeGuerra: 'any_nomeGuerra',
			dataNascimento: '2001-01-01T23:00:00.000Z',
			sexo: 'Masculino',
			patente: 'any_patente',
			situacaoMilitar: 'any_situacaoMilitar',
			nacionalidade: 'Angolana',
			estadoCivil: 'solteiro',
			dataIncorporacao: '2001-01-01T23:00:00.000Z',
			naturalidade: 'Huambo',
			telefone1: 'any_telefone',
			telefone2: 'any_telefone2',
			NIP: 'any_nif',
			email: 'any_email',
			enderecoId: militares.militar.enderecoId,
			dadosPessoaisId: militares.militar.dadosPessoaisId,
			createdAt: militares.militar.createdAt.toISOString(),
			updatedAt: militares.militar.updatedAt.toISOString(),
			endereco: {
				id: militares.militar.endereco.id,
				provincia: 'any_provincia',
				municipio: 'any_municipio',
				bairro: 'any_bairro',
				rua: 'any_rua',
				numeroCasa: 'any_numeroCasa',
				createdAt: militares.militar.endereco.createdAt.toISOString(),
				updatedAt: militares.militar.endereco.updatedAt.toISOString(),
			},
			dadosPessoais: {
				id: militares.militar.dadosPessoais.id,
				filiacaoPaterna: 'any_filiacaoPaterna',
				filiacaoMaterna: 'any_filiacaoMaterna',
				numeroBI: 'any_numeroBI',
				numeroPassaporte: 'any_numeroPassporte',
				numeroSegurancaSocial: null,
				quantidadeFilho: 5,
				nomeEsposa: 'any_esposa',
				createdAt: militares.militar.dadosPessoais.createdAt.toISOString(),
				updatedAt: militares.militar.dadosPessoais.updatedAt.toISOString(),
			},
			Promocoes: [],
			FormacoesAcademicas: [],
			FormacoesMilitares: [
				{
					id: militares.formacaoMilitar.id,
					curso: 'Contabilidade90',
					instituicao: 'Agostinho neto 2',
					dataInicio: militares.formacaoMilitar.dataInicio.toISOString(),
					dataFim: militares.formacaoMilitar.dataFim.toISOString(),
					militarId: militares.militar.id,
					createdAt: militares.formacaoMilitar.createdAt.toISOString(),
					updatedAt: militares.formacaoMilitar.updatedAt.toISOString(),
				},
			],
			Especializacoes: [],
			ContactoEmergencia: [],
		});
	});

	test('should route GET /militares return 204 if response empty', async () => {
		const url = '/api/v1/militares';
		const response = await request(express.app).get(url);
		expect(response.status).toBe(204);
	});
});
