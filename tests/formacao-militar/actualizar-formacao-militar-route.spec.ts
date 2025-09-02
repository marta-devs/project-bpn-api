import { beforeEach, describe, expect, test } from 'vitest';
import { deleteTableAll } from '../../src/libs/prisma';
import { createFakeMilitar } from '../helpers/create-fake-militar';
import axios from 'axios';
import { updateFakeMilitar } from '../helpers/update-fake-entities';
import { date } from 'zod/v4';
import { response } from 'express';
const api = axios.create({
	baseURL: 'http://localhost:3333/api/v1',
});
describe('ActualizarFormacaoMilitarRoute', async () => {
	beforeEach(async () => {
		await deleteTableAll();
	});
	test('it should route /formacao/:id return status 200', async () => {
		const formacaMilitar = (await createFakeMilitar()).formacaoMilitar;
		const objectData = {
			curso: 'Contabilidade99',
			instituicao: 'Agostinho neto 2',
			dataInicio: '2023-12-15T00:00:00Z',
			dataFim: '2025-05-09T18:04:40.787Z',
		};
		const response = await api.put(
			`/formacao/${formacaMilitar.id}`,
			objectData,
		);
		expect(response.status).toBe(200);
		expect(response.data.message).toEqual('Dado atualizado com sucesso');
	});
	test('it should route /formacao/:id return status 422', async () => {
		const formacaMilitar = (await createFakeMilitar()).formacaoMilitar;
		const militar = (await createFakeMilitar()).militar;
		const newMilitar = {
			id: militar.id,
			username: militar.username,
			password: militar.password,
			status: militar.status,
			qrcode: militar.qrcode,
			funcao: militar.funcao,
			nome: militar.nome,
			nomeGuerra: militar.nomeGuerra,
			dataNascimento: militar.dataNascimento,
			dataIncorporacao: militar.dataIncorporacao,
			estadoCivil: militar.estadoCivil,
			nacionalidade: militar.nacionalidade,
			naturalidade: militar.naturalidade,
			NIP: militar.NIP,
			sexo: militar.sexo,
			patente: militar.patente,
			situacaoMilitar: 'removido',
			telefone1: militar.telefone1,
			email: militar.email,
			telefone2: militar.telefone2,
			enderecoId: militar.enderecoId,
			dadosPessoaisId: militar.dadosPessoaisId,
			createdAt: militar.createdAt,
			updatedAt: militar.updatedAt,
		};
		await updateFakeMilitar(newMilitar);
		const objectData = {
			curso: 'Contabilidade09',
			instituicao: 'Agostinho neto 2',
			dataInicio: '2023-12-15T00:00:00Z',
			dataFim: '2025-05-09T18:04:40.787Z',
		};
		try {
			const response = await api.put(
				`/formacao/${formacaMilitar.id}`,
				objectData,
			);
		} catch (error) {
			expect(error.response.status).toBe(422);
			expect(error.response.data.message).toBe(
				'Não é possível editar formação do militar devido ao seu status atual',
			);
		}
	});
});
