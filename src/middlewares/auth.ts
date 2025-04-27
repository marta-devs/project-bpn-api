import jwtConfig from '@/configs/jwt-config';
import { UnauthorizedError } from '@/utils/api-errors';
import type { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const ensureAuthenticated = async (
	request: Request,
	response: Response,
	next: NextFunction,
) => {
	const { authorization } = request.headers;

	if (!authorization) {
		throw new UnauthorizedError('Token not provided');
	}

	const [type, token] = authorization.split(' ');

	if (type !== 'Bearer' || !token) {
		throw new UnauthorizedError('Token invalid');
	}

	try {
		const payload = jwt.verify(token, jwtConfig.secret);
		request['user'] = payload;
	} catch (error) {
		throw new UnauthorizedError('Token invalid');
	}

	return next();
};
