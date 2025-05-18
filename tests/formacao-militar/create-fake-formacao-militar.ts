import { UsuarioStatus } from '../../src/constants/usuario-status';
import prisma from '../../src/libs/prisma';

export const createFakeFormacaoMilitar = async () => {
	return await prisma.$transaction(async (prismaTransaction) => {
		const endereco = await prismaTransaction.endereco.create({
			data: {
				bairro: 'any_bairro',
				municipio: 'any_municipio',
				numeroCasa: 'any_numeroCasa',
				provincia: 'any_provincia',
				rua: 'any_rua',
			},
		});

		const dadosPessoais = await prismaTransaction.dadosPessoais.create({
			data: {
				filiacaoMaterna: 'any_filiacaoMaterna',
				filiacaoPaterna: 'any_filiacaoPaterna',
				numeroBI: 'any_numeroBI',
				numeroPassaporte: 'any_numeroPassporte',
				quantidadeFilho: 5,
				nomeEsposa: 'any_esposa',
			},
		});

		const militar = await prismaTransaction.militar.create({
			data: {
				nome: 'any_nome',
				nomeGuerra: 'any_nomeGuerra',
				dataNascimento: new Date('01/02/2001'),
				dataIncorporacao: new Date('01/02/2001'),
				estadoCivil: 'solteiro',
				nacionalidade: 'Angolana',
				naturalidade: 'Huambo',
				NIP: 'any_nif',
				sexo: 'Masculino',
				patente: 'any_patente',
				situacaoMilitar: 'any_situacaoMilitar',
				telefone1: 'any_telefone',
				email: 'any_email',
				telefone2: 'any_telefone2',
				enderecoId: endereco.id,
				dadosPessoaisId: dadosPessoais.id,
			},
		});

		await prismaTransaction.usuario.create({
			data: {
				username: 'any_username',
				funcao: 'any_funcao',
				password: 'any_password',
				qrcode: 'any_qrcode',
				status: UsuarioStatus.ACTIVO,
				militarId: militar.id,
			},
		});

		const formacaoMilitar = await prismaTransaction.formacoesMilitares.create({
			data: {
				curso: 'Contabilidade90',
				instituicao: 'Agostinho neto 2',
				dataInicio: '2022-05-09T18:04:40.787Z',
				dataFim: '2025-05-09T18:04:40.787Z',
				militarId: militar.id,
			},
		});

		return formacaoMilitar;
	});
};
