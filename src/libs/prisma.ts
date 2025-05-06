import { PrismaClient } from '../../generated/prisma/client';

const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
	errorFormat: 'minimal',
});

export const deleteTableAll = async () => {
	await prisma.$transaction([
		prisma.dadosPessoais.deleteMany(),
		prisma.endereco.deleteMany(),
		prisma.usuario.deleteMany(),
		prisma.militar.deleteMany(),
	]);
};

export default prisma;
