import { z } from 'zod';

export const loginValidator = z
	.object({
		email: z.string().email('email invalido').optional(),
		username: z.string().optional(),
		password: z.string().nonempty().min(6),
	})
	.refine((data) => data.email || data.username, {
		message:
			'Pelo menos um dos campos (email ou username) deve ser preenchido.',
	});
