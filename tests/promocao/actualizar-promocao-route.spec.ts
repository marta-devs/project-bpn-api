import axios from "axios";
import { describe, expect, test } from "vitest";
import { createFakeMilitar } from "../helpers/create-fake-militar";
import { beforeEach } from "node:test";
import { deleteTableAll } from "../../src/libs/prisma";
import { error } from "console";
import {
  updateFakeMilitar,
  updatePromocao,
} from "../helpers/update-fake-entities";
import { create } from "domain";
const api = axios.create({
  baseURL: "http://localhost:3333/api/v1",
});
describe("ActulizarPromocaoRoute", async () => {
  beforeEach(async () => {
    await deleteTableAll();
  });

  test("it should route /promocao/:militar_id return 200", async () => {
    const promocao = (await createFakeMilitar()).promocao;
    const objectData = {
      promocao: "capitao 2",
      descricao: "capitao do departamento",
      dataPromocao: "2017-09-08T15:25:53Z",
    };
    const response = await api.put(`/promocao/${promocao.id}`, objectData);
    expect(response.status).toBe(200);
    expect(response.data.message).toEqual("Dado atualizado com sucesso");
  });
  test("it shoul route /promocao/:militar_id return 404", async () => {
    const promocao = {
      id: "1234567-76543234567",
    };
    const objectData = {
      promocao: "capitao 2",
      descricao: "capitao do departamento",
      dataPromocao: "2017-09-08T15:25:53Z",
    };
    try {
      const response = await api.put(`/promocao/${promocao.id}`, objectData);
    } catch (error) {
      expect(error.status).toBe(404);
      expect(error.response.data.message).toEqual("Promoção não encontrada");
      expect(error.response.data.error).toBeTruthy();
    }
  });
  test("it shoul route /promocao/:militar_id return 422", async () => {
    const militar = (await createFakeMilitar()).militar;
    const newMilitar = {
      id: militar.id,
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
      situacaoMilitar: "removido",
      telefone1: militar.telefone1,
      email: militar.email,
      telefone2: militar.telefone2,
      enderecoId: militar.enderecoId,
      dadosPessoaisId: militar.dadosPessoaisId,
      createdAt: militar.createdAt,
      updatedAt: militar.updatedAt,
    };
    await updateFakeMilitar(newMilitar);
    const promocao = (await createFakeMilitar()).promocao;
    const objectData = {
      promocao: "capitao 2",
      id: promocao.id,
      createdAt: promocao.createdAt,
      updatedAt: promocao.updatedAt,
      militarId: militar.id,
      descricao: "capitao do departamento",
      dataPromocao: promocao.dataPromocao,
    };

    try {
      const response = await api.put(`/promocao/${promocao.id}`, objectData);
    } catch (error) {
      expect(error.status).toBe(422);
      expect(error.response.data.error).toBeTruthy();
    }
  });
});
