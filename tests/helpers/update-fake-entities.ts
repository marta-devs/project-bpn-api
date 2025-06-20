import type { Usuario, Militar } from '../../generated/prisma';
import prisma from '../../src/libs/prisma';

export const updateFakeMilitar = (data: Militar) => {
	const militar = prisma.militar.update({
		where: {
			id: data.id,
		},
		data,
	});
	return militar;
};

export const updateUsuario = (data: Usuario) => {
	const usuario = prisma.usuario.update({
		where: {
			id: data.id,
		},
		data,
	});
	return usuario;
};
