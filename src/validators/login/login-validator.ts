import { z } from 'zod';

export const loginValidator = z
	.object({
		nip: z.string().optional(),
		username: z.string().optional(),
		password: z.string().nonempty().min(6),
	})
	.refine((data) => data.nip || data.username, {
		message: 'nip ou username deve ser preenchido.',
	});
