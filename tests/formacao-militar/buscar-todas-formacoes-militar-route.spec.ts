import { describe, test, beforeEach, expect } from 'vitest';
import { deleteTableAll } from '../../src/libs/prisma';
import { createFakeMilitar } from '../helpers/create-fake-militar';
import { ExpressAdapter } from '../../src/libs/express';
import axios from 'axios';
const app = new ExpressAdapter();
describe('FindAllMilitaryTrainingRoute', async () => {
	beforeEach(async () => {
		await deleteTableAll();
	});
	const api = axios.create({
		baseURL: 'http://localhost:3333/api/v1',
	});
	test('it should route /formacoes_militar/:militar_id return status 200', async () => {
		const result = await createFakeMilitar();
		const militar = result.militar;
		const formacaMilitar = result.formacaoMilitar;
		try {
			await api.get(`/formacoes_militar/${militar.id}`);
		} catch (error) {
			expect(error.response.status).toBe(200);
			expect(error.response.data).toContain(formacaMilitar);
			expect(error.response.data.message).toEqual('Dados buscados com sucesso');
		}
	});
});
