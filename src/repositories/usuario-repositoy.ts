import prisma from '../libs/prisma';
import { DAOGenerico } from './DAO';
import type { Usuario } from '../../generated/prisma';

export interface UsuarioInterfaceOutPut {
	id: string;
	username: string;
	password: string;
	status: string;
	qrcode: string;
	funcao: string;
	militarId: string;
	createdAt: Date;
	updatedAt: Date;
}

export class UsuarioRepository extends DAOGenerico<Usuario> {
	constructor() {
		super(prisma.usuario);
	}
	public async buscarPorUsername(
		username: string,
	): Promise<UsuarioInterfaceOutPut | null> {
		const usuario = await prisma.usuario.findUnique({
			where: {
				username,
			},
			include: {
				militar: true,
			},
		});
		return usuario;
	}
	public async buscarPorMilitarId(
		militarId: string,
	): Promise<UsuarioInterfaceOutPut | null | undefined> {
		const usuario = await prisma.usuario.findFirst({
			where: {
				militarId,
			},
		});
		return usuario;
	}
}
