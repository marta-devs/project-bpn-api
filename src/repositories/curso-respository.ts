import prisma from '@/libs/prisma';
import type { Curso } from '../../generated/prisma';
import { DAOGenerico } from './DAO';

export class CursoRepository extends DAOGenerico<Curso> {
	constructor() {
		super(prisma.curso);
	}
}
