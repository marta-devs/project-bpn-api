import prisma from '@/libs/prisma';
import type { FormacoesMilitares } from '../../generated/prisma';
import { DAOGenerico } from './DAO';

export class FormacaoMilitaryRepository extends DAOGenerico<FormacoesMilitares> {
	constructor() {
		super(prisma.formacoesMilitares);
	}
}
