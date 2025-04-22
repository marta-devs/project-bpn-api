import { Router } from 'express';
import { UserController } from '@/controllers/user-controller';

const routes = Router();

routes.get('/', new UserController().getUser);

export default routes;
