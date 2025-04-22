import { Request, Response, Router } from 'express';

export class UserController {
    async getUser(req: Request, res: Response): Promise<any> {
        const isOnline = true;

        if (!isOnline) throw new Error('User is offline');

        return res.send('Hello World');
    }
}