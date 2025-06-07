import { expect, test, describe, beforeEach } from 'vitest';
import request from 'supertest';
import { ExpressAdapter } from '../src/libs/express';
import { deleteTableAll } from '../src/libs/prisma';
import { createFakeMilitar } from './helpers/create-fake-militar';
import { faker } from '@faker-js/faker';

const express = new ExpressAdapter();

describe('RemoverMilitarRoutes', () => {
	beforeEach(async () => {
		await deleteTableAll();
	});

	test('should route DELETE /militares return 204 on sucess', async () => {
		const { militar } = await createFakeMilitar();
		const url = `/api/v1/militares/${militar.id}`;
		const response = await request(express.app).delete(url);
		expect(response.status).toBe(204);
	});

	test('should route DELETE /militares return 400 if id is not a uuid', async () => {
		const id = 'any_id';
		const url = `/api/v1/militares/${id}`;
		const response = await request(express.app).delete(url);
		expect(response.status).toBe(400);
		expect(response.body.message).toBe('Invalid uuid');
	});

	test('should route DELETE /militares return 404 if id not exists', async () => {
		const id = faker.string.uuid();
		const url = `/api/v1/militares/${id}`;
		const response = await request(express.app).delete(url);
		expect(response.status).toBe(404);
		expect(response.body.message).toBe('Militar não encontrado');
	});
});
