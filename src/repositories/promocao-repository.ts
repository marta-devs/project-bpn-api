import type { Promocoes } from '../../generated/prisma';
import prisma from '../libs/prisma';
import { DAOGenerico } from './DAO';

export class PromocaoRepositry extends DAOGenerico<Promocoes> {
	constructor() {
		super(prisma.promocoes);
	}
}
