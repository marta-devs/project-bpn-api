import prisma from '../libs/prisma';
import type { FormacoesMilitares } from '../../generated/prisma';
import { DAOGenerico } from './DAO';

export class FormacaoMilitaryRepository extends DAOGenerico<FormacoesMilitares> {
	constructor() {
		super(prisma.formacoesMilitares);
	}
	public async buscarFormacaoMilitarPorIdMilitar(
		id: string,
	): Promise<FormacoesMilitares> {
		console.log('id do repository militar', id);
		return await prisma.formacoesMilitares.findMany({
			where: {
				militarId: id,
			},
		});
	}
}
