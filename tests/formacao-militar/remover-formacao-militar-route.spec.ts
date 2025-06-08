import { describe, beforeEach, test, expect } from 'vitest';
import { deleteTableAll } from '../../src/libs/prisma';
import { createFakeMilitar } from '../helpers/create-fake-militar';
import axios from 'axios';
const api = axios.create({
	baseURL: 'http://localhost:3333/api/v1',
});
describe('RemoveMilitarTrainingRoute', async () => {
	beforeEach(async () => {
		await deleteTableAll();
	});
	test('it should route /formacao/:id return 204', async () => {
		const formacaMilitar = (await createFakeMilitar()).formacaoMilitar;
		const response = await api.delete(`/formacao/${formacaMilitar.id}`);
		expect(response.status).toBe(204);
		expect(response.data).toContain('');
		expect(response.statusText).toEqual('No Content');
	});
	test('it should route /formacao/:id return 404', async () => {
		const id = '1234567-23tyu7iuttre-3456789';
		try {
			const response = await api.delete(`/formacao/${id}`);
		} catch (error) {
			expect(error.response.status).toBe(404);
			expect(error.response.data.error).toBeTruthy();
			expect(error.response.data.message).toEqual('Formação não encontrada');
		}
	});
});
