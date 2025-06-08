import { beforeEach, describe, expect, test } from 'vitest';
import { deleteTableAll } from '../../src/libs/prisma';
import { createFakeMilitar } from '../helpers/create-fake-militar';
import axios from 'axios';
import { string } from 'zod/v4';
const api = axios.create({
	baseURL: 'http://localhost:3333/api/v1',
});
describe('findOneMilitaryTrainingRoute', () => {
	beforeEach(async () => {
		await deleteTableAll();
	});
	test('it should route /formacao/:id return status 200 ', async () => {
		const formacaoMilitar = (await createFakeMilitar()).formacaoMilitar;
		const formacaMilitarOutput = {
			id: formacaoMilitar.id,
			curso: formacaoMilitar.curso,
			instituicao: formacaoMilitar.instituicao,
			dataInicio: formacaoMilitar.dataInicio.toISOString(),
			dataFim: formacaoMilitar.dataFim.toISOString(),
			militarId: formacaoMilitar.militarId,
			createdAt: formacaoMilitar.createdAt.toISOString(),
			updatedAt: formacaoMilitar.updatedAt.toISOString(),
		};
		const response = await api.get(`/formacao/${formacaMilitarOutput.id}`);
		expect(response.status).toBe(200);
		expect(response.data.data.data).toMatchObject(formacaMilitarOutput);
		expect(response.data.message).toEqual('Dados buscado com sucesso');
	});
	test('it should route /formacao/:id return 404', async () => {
		const id = '1234-2345678iuytdfg-uo87edf';

		try {
			const response = await api.get(`/formacao/${id}`);
		} catch (error) {
			expect(error.response.status).toBe(404);
			expect(error.response.data.message).toEqual('Formação não encontrada');
		}
	});
});
