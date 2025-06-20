import { describe, test, beforeEach, expect } from 'vitest';
import { deleteTableAll } from '../../src/libs/prisma';
import { createFakeMilitar } from '../helpers/create-fake-militar';
import axios from 'axios';
import { ExpressAdapter } from '../../src/libs/express';
import {
	updateFakeMilitar,
	updateUsuario,
} from '../helpers/update-fake-entities';
import { date } from 'zod/v4';
const app = new ExpressAdapter().app;
describe('AdicionarPromocaoRoute', async () => {
	beforeEach(async () => {
		await deleteTableAll();
	});
	const api = axios.create({
		baseURL: 'http://localhost:3333/api/v1',
	});
	test('it should route /promocao/:militar_id return status 201 on success ', async () => {
		const result = (await createFakeMilitar()).militar;

		const data = {
			promocao: 'capitao',
			descricao: 'capitao do departamento',
			dataPromocao: '2017-09-08T15:25:53Z',
		};

		const response = await api.post(`/promocao/${result.id}`, data);

		expect(response.status).toBe(201);
		expect(response.data.data.data).toHaveProperty('id');
		expect(response.data.data.data).toHaveProperty('createdAt');
		expect(response.data.data.data).toHaveProperty('updatedAt');
		expect(response.data.message).toEqual('Dado criado com sucesso');
		expect(response.statusText).toEqual('Created');
	});
	test('is should oute /promocao/:militar_id return status 404 ', async () => {
		const militarId = '85f0ebd9-69d4-447b-8a2c-6b78154a0af';
		const data = {
			promocao: 'capitao',
			descricao: 'capitao do departamento',
			dataPromocao: '2017-09-08T15:25:53Z',
		};

		try {
			await api.post(`/promocao/${militarId}`, data);
		} catch (error) {
			expect(error.response.status).toBe(404);
			expect(error.response.data.message).toEqual('usuario nao encontrado');
		}
	});
	test('is should oute /promocao/:militar_id return status 422 ', async () => {
		const result = await createFakeMilitar();

		const usuario = {
			id: result.usuario.id,
			username: 'any_username',
			funcao: 'any_function',
			password: 'any_password',
			qrcode: 'any_qrcode',
			status: 'ATIVO',
			militarId: result.militar.id,
			createdAt: result.usuario.createdAt,
			updatedAt: result.usuario.updatedAt,
		};

		const newUsuario = await updateUsuario(usuario);
		const data = {
			promocao: 'capitao',
			descricao: 'capitao do departamento',
			dataPromocao: '2017-09-08T15:25:53Z',
		};
		try {
			await api.post(`/promocao/${newUsuario.militarId}`, data);
		} catch (error) {
			expect(error.response.status).toBe(422);
			expect(error.response.data.message).toEqual(
				'Não é possível atribuir promoção ao militar devido ao sua funcao',
			);
		}
	});
	test('is should oute /promocao/:militar_id return status 422 ', async () => {
		const result = await createFakeMilitar();

		const militar = {
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
		const data = {
			promocao: 'capitao',
			descricao: 'capitao do departamento',
			dataPromocao: '2017-09-08T15:25:53Z',
		};
		try {
			await api.post(`/promocao/${newMilitar.id}`, data);
		} catch (error) {
			expect(error.response.status).toBe(422);
			expect(error.response.data.message).toEqual(
				'Não é possível atribuir promoção ao militar devido ao seu status',
			);
		}
	});
});
