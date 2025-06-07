import type { Militar } from '../../generated/prisma';
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
