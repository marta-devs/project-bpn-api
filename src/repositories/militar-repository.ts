import prisma from '@/libs/prisma';
import type { Militar } from '../../generated/prisma';
import { DAOGenerico } from './DAO';

export class MilitarRepository extends DAOGenerico<Militar> {
	constructor() {
		super(prisma.militar);
	}
}
