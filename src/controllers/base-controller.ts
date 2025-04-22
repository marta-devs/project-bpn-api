import { Request, Response } from 'express';

export interface BaseController {
    findAll: (request: Request, response: Response) => Promise<any>;
    create: (request: Request, response: Response) => Promise<any>;
    findById: (request: Request, response: Response) => Promise<any>;
    update: (request: Request, response: Response) => Promise<any>;
    delete: (request: Request, response: Response) => Promise<any>;
}