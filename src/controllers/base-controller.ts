import type { Request, Response } from 'express';

export interface BaseController {
	handle: (request: Request, response: Response) => Promise<any>;
}
