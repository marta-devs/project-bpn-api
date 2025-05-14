import { describe, expect, should, test } from 'vitest';
import request from 'supertest';
import { createFakeFormacaoMilitar } from './create-fake-formacao-militar';
import { beforeEach } from 'node:test';
import { ExpressAdapter } from '../../src/libs/express';
import { deleteTableAll } from '../../src/libs/prisma';
const app = new ExpressAdapter().app;

describe('AddFormacaoMilitarRoute', () => {
	beforeEach(() => {
		deleteTableAll();
	});
	test('should route add /formacao-militar/militar_id return 201 on success', async () => {
		const formacaoMilitar = await createFakeFormacaoMilitar();
		const militar_id = formacaoMilitar.militarId;
		const response = await request(app).post(`/formacao-militar/${militar_id}`);
		expect(response.status).toBe(201);
	});
});
