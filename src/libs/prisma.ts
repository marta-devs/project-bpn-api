import { PrismaClient } from '../../generated/prisma/client';

const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
	errorFormat: 'minimal',
});

export const deleteTableAll = async () => {
	await prisma.$transaction([
		prisma.dadosPessoais.deleteMany(),
		prisma.endereco.deleteMany(),
		prisma.militar.deleteMany(),
		prisma.formacoesMilitares.deleteMany(),
	]);
};

export default prisma;
