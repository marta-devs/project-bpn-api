import { describe, expect, should, test } from 'vitest';
import request from 'supertest';
import { beforeEach } from 'node:test';
import { ExpressAdapter } from '../../src/libs/express';
import { deleteTableAll } from '../../src/libs/prisma';
import { createFakeMilitar } from '../helpers/create-fake-militar';
const app = new ExpressAdapter().app;

describe('AddFormacaoMilitarRoute', () => {
	beforeEach(() => {
		deleteTableAll();
	});
	test('should route add /formacao-militar/militar_id return 201 on success', async () => {
		const result = await createFakeMilitar();
		const militar_id = result.formacaoMilitar.militarId;
		const response = await request(app).post('/api/v1/formacoes_militar').send({
			curso: 'Contabilidade90',
			instituicao: 'Agostinho neto 2',
			dataInicio: '2022-05-09T18:04:40.787Z',
			dataFim: '2025-05-09T18:04:40.787Z',
			militarId: militar_id,
		});
		expect(response.status).toBe(201);
	});
});
