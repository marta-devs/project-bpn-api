import type { Response } from 'express';
import type { ApiError } from './api-errors';

export const ok = (
	response: Response,
	data: any,
	message: string,
	meta?: any,
) => {
	return response.status(200).json({
		data,
		error: null,
		message,
		meta,
	});
};

export const created = (
	response: Response,
	data: any,
	message: string,
	meta?: any,
) => {
	return response.status(201).json({
		data,
		error: null,
		message,
		meta,
	});
};

export const noContent = (response: Response, message: string, meta?: any) => {
	return response.status(204).json({
		data: null,
		error: null,
		message,
		meta,
	});
};

export const responseError = (
	response: Response,
	error: Error & Partial<ApiError>,
) => {
	const statusCode = error.statuscode ?? 500;
	const message = error.message ? error.message : 'Internal Server Error';
	response.status(statusCode).json({ message, data: null, error: error });
};
