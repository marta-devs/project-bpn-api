import { z } from 'zod';

export const removerMilitarySchema = z.object({
	id: z.string().trim().uuid().nonempty('Id está em falta'),
});
