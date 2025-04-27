import type { ApiError } from '@/utils/api-errors';
import type {
	Request,
	Response,
	NextFunction,
	ErrorRequestHandler,
} from 'express';

const errorMiddleware: ErrorRequestHandler = (
	err: Error & Partial<ApiError>,
	request: Request,
	response: Response,
	next: NextFunction,
) => {
	const statusCode = err.statuscode ?? 500;
	const message = err.statuscode ? err.message : 'Internal Server Error';
	response.status(statusCode).json({ message, data: null, error: err });
};

export default errorMiddleware;
