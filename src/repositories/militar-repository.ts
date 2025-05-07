import prisma from '../libs/prisma';
import { DAOGenerico } from './DAO';
import type { Militar } from '../../generated/prisma';
import { UsuarioStatus } from '../constants/usuario-status';

export class MilitarRepository extends DAOGenerico<Militar> {
	constructor() {
		super(prisma.militar);
	}

	async excluir(id: string): Promise<Militar | null> {
		const usuario = await prisma.usuario.findFirst({
			where: {
				militarId: id,
			},
		});

		await prisma.usuario.update({
			where: {
				id: usuario?.id,
			},
			data: {
				status: UsuarioStatus.REMOVIDO,
			},
		});

		return await prisma.militar.findFirst({
			where: {
				id,
			},
		});
	}
	public async buscarPorEmailMilitar(email: string): Promise<Militar | null> {
		const militar = await prisma.militar.findFirst({
			where: {
				email,
			},
			include: {
				Usuario: true,
			},
		});
		return militar;
	}
}
