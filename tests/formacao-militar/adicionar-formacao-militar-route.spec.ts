import { describe, expect, test } from 'vitest';
import { beforeEach } from 'node:test';
import { deleteTableAll } from '../../src/libs/prisma';
import axios from 'axios';
import { createFakeMilitar } from '../helpers/create-fake-militar';
import { ExpressAdapter } from '../../src/libs/express';
import { updateFakeMilitar } from '../helpers/update-fake-militar';
import type { Militar } from '../../generated/prisma';

const app = new ExpressAdapter().app;
describe('AddFormacaoMilitarRoute', async () => {
	beforeEach(async () => {
		await deleteTableAll();
	});

	const api = axios.create({
		baseURL: 'http://localhost:3333/api/v1',
	});
	const result = await createFakeMilitar();

	test('should route add /formacao-militar/militar_id return 201 on success', async () => {
		const militar = result.militar;
		const objectData = {
			curso: 'Contabilidade99',
			instituicao: 'Agostinho neto 2',
			dataInicio: '2023-12-15T00:00:00Z',
			dataFim: '2024-12-15T00:00:00Z',
			militarId: militar.id,
		};
		const response = await api.post(
			`/formacao_militar/${militar.id}`,
			objectData,
		);
		expect(response.status).toBe(201);
		expect(response.statusText).toEqual('Created');
		expect(response.data.message).toEqual('Dado criado com sucesso');
		expect(response.data.data.data.militarId).toBe(militar.id);
		expect(response.data.data.data).toHaveProperty('id');
	});

	test('it should route /formacao_militar/:militar_id return 404', async () => {
		const militarId = '1234567890-098765434567889-098';
		const objectData = {
			curso: 'Contabilidade90',
			instituicao: 'Agostinho neto 2',
			dataInicio: '2023-12-15T00:00:00Z',
			dataFim: '2024-12-15T00:00:00Z',
			militarId: militarId,
		};
		try {
			await api.post(`/formacao_militar/${militarId}`, objectData);
		} catch (error) {
			expect(error.response.status).toBe(404);
			expect(error.response.data).toHaveProperty('error');
			expect(error.response.data.message).toEqual('Militar não encontrado');
		}
	});
	test('it should route /formacao_militar/:militar_id return 422', async () => {
		const result = await createFakeMilitar();
		const militar: Militar = {
			id: result.militar.id,
			nome: result.militar.nome,
			nomeGuerra: result.militar.nomeGuerra,
			dataNascimento: result.militar.dataNascimento,
			dataIncorporacao: result.militar.dataIncorporacao,
			estadoCivil: result.militar.estadoCivil,
			nacionalidade: result.militar.nacionalidade,
			naturalidade: result.militar.naturalidade,
			NIP: result.militar.NIP,
			sexo: result.militar.sexo,
			patente: result.militar.patente,
			situacaoMilitar: 'REMOVIDO',
			telefone1: result.militar.telefone1,
			email: result.militar.email,
			telefone2: result.militar.telefone2,
			enderecoId: result.militar.enderecoId,
			dadosPessoaisId: result.militar.dadosPessoaisId,
			createdAt: result.militar.createdAt,
			updatedAt: result.militar.updatedAt,
		};

		const newMilitar = await updateFakeMilitar(militar);
		const objectData = {
			curso: 'Contabilidade90',
			instituicao: 'Agostinho neto 2',
			dataInicio: '2023-12-15T00:00:00Z',
			dataFim: '2024-12-15T00:00:00Z',
			militarId: newMilitar.id,
		};
		try {
			await api.post(`/formacao_militar/${militar.id}`, objectData);
		} catch (error) {
			expect(error).toBeTruthy();
			expect(error.response.status).toBe(422);
			expect(error.response.data.message).toEqual(
				'Não é possível adicionar formação ao militar devido ao seu status atual',
			);
		}
	});
	test('it should route /formacao_militar/:militar_id return 409', async () => {
		const formacaMilitar = (await createFakeMilitar()).formacaoMilitar;
		const militar = (await createFakeMilitar()).militar;
		try {
			await api.post(`/formacao_militar/${militar.id}`, formacaMilitar);
		} catch (error) {
			expect(error).toBeTruthy();
			expect(error.response.status).toBe(409);
			expect(error.response.data.message).toEqual(
				'Formação já cadastrada para este militar',
			);
		}
	});
});
