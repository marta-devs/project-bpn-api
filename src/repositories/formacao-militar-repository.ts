import prisma from '../libs/prisma';
import type { FormacoesMilitares } from '../../generated/prisma';
import { DAOGenerico } from './DAO';

export class FormacaoMilitaryRepository extends DAOGenerico<FormacoesMilitares> {
	constructor() {
		super(prisma.formacoesMilitares);
	}
	public async buscarFormacaoMilitarPorIdMilitar(
		id: string,
	): Promise<FormacoesMilitares[] | null> {
		return await prisma.formacoesMilitares.findMany({
			where: {
				militarId: id,
			},
		});
	}
}
