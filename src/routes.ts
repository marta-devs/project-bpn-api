import { Router } from 'express';
import { readdirSync } from 'node:fs';
import path from 'node:path';

const routes = Router();

readdirSync(path.resolve(__dirname, 'routes')).forEach(async (file) => {
	if (file === 'base.routes.ts') {
		return ;
	}

	const module = await import(`routes/${file}`);
	const BaseRouteModule = module.default;
  console.log(typeof BaseRouteModule)
	const baseRoute = new BaseRouteModule();
  
	baseRoute.routes(routes);

});

export default routes;
