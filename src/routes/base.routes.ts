import type { Router } from 'express';

export abstract class BaseRoute {
	public abstract routes(routes: Router): void;
}
