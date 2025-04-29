import type { Usuario } from '@/utils/user';

declare global {
	namespace Express {
		interface Request {
			user?: Usuario; // ou `user: any` se não tiver tipo definido
		}
	}
}
