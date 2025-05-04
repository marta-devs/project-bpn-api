import type { ApiError } from '../utils/api-errors';
import type {
	Request,
	Response,
	NextFunction,
	ErrorRequestHandler,
} from 'express';
import { responseError } from '../utils/http-helper';

const errorMiddleware: ErrorRequestHandler = (
	err: Error & Partial<ApiError>,
	request: Request,
	response: Response,
	next: NextFunction,
) => {
	responseError(response, err);
	next();
};

export default errorMiddleware;
