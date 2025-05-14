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
			id: militares.id,
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
			enderecoId: militares.enderecoId,
			dadosPessoaisId: militares.dadosPessoaisId,
			createdAt: militares.createdAt.toISOString(),
			updatedAt: militares.updatedAt.toISOString(),
			endereco: {
				id: militares.endereco.id,
				provincia: 'any_provincia',
				municipio: 'any_municipio',
				bairro: 'any_bairro',
				rua: 'any_rua',
				numeroCasa: 'any_numeroCasa',
				createdAt: militares.endereco.createdAt.toISOString(),
				updatedAt: militares.endereco.updatedAt.toISOString(),
			},
			dadosPessoais: {
				id: militares.dadosPessoais.id,
				filiacaoPaterna: 'any_filiacaoPaterna',
				filiacaoMaterna: 'any_filiacaoMaterna',
				numeroBI: 'any_numeroBI',
				numeroPassaporte: 'any_numeroPassporte',
				numeroSegurancaSocial: null,
				quantidadeFilho: 5,
				nomeEsposa: 'any_esposa',
				createdAt: militares.dadosPessoais.createdAt.toISOString(),
				updatedAt: militares.dadosPessoais.updatedAt.toISOString(),
			},
			Promocoes: [],
			FormacoesAcademicas: [],
			FormacoesMilitares: [],
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
