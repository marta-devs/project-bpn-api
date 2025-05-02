import { BadRequestError } from '@/utils/api-errors';
import type { NextFunction, Request, Response } from 'express';
import type { z } from 'zod';

export function validateData(schema: z.ZodObject<any, any>) {
	return (request: Request, response: Response, next: NextFunction) => {
		const { body } = request;
		const result = schema.safeParse(body);

		if (!result.success) {
			const errors = result.error.errors.map((error) => error.message);

			throw new BadRequestError(errors.toString());
		}

		next();
	};
}
