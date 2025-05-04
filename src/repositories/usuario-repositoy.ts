import prisma from '@/libs/prisma';
import { DAOGenerico } from './DAO';
import type { Prisma, Usuario } from '../../generated/prisma';

export class UsuarioRepository extends DAOGenerico<Usuario> {
	constructor() {
		super(prisma.usuario);
	}
}
