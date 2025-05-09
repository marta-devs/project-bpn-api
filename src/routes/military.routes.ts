import type { Request, Response, Router } from 'express';
import { BaseRoute } from './base.routes';
import { MilitarRepository } from '../repositories/militar-repository';
import { RemoverMilitarService } from '../services/militar/remover-militar-service';
import { RemoverMilitarController } from '../controllers/militar/remover-militar-controller';
import { validateParams } from '../middlewares/validation';
import { removerMilitarySchema } from '../validators/militar/militar-schema';

export default class MilitarRoutes extends BaseRoute {
	public routes(routes: Router): void {
		routes.delete(
			'/militares/:id',
			validateParams(removerMilitarySchema),
			(request, response) => {
				/*
            #swagger.tags = ['Militar']
            #swagger.summary = 'Returns a user by id'
            #swagger.description = 'This endpoint will return a user by id...'
        */

				/*  #swagger.parameters['id'] = {
            description: 'Some description...',
            type: 'string'
        } */

				const militarRepository = new MilitarRepository();
				const removerMilitarService = new RemoverMilitarService(
					militarRepository,
				);

				/*  #swagger.responses[203] = {
                description: "Some description...",
                content: {
                    "application/json": {
                        schema:{
                            $ref: "#/components/schemas/noContentDelete"
                        }
                    }           
                }
            }   
        */

				/*  #swagger.responses[400] = {
                description: "Some description...",
                content: {
                    "application/json": {
                        schema:{
                          $ref: "#/components/schemas/badRequestError"
                        }
                    }           
                }
            }   
        */

				/*  #swagger.responses[404] = {
                description: "Some description...",
                content: {
                    "application/json": {
                        schema:{
                            message: "Militar não encontrado",
                            data: null,
                            error: {
                              stack: "dladladladaldlal",
                              name: "BadRequestError",
                              message: "aldaldladlaldaldla"
                            }
                        }
                    }           
                }
            }   
        */

				/*  #swagger.responses[500] = {
                description: "Some description...",
                content: {
                    "application/json": {
                        schema:{
                          $ref: "#/components/schemas/serverError"
                        }
                    }           
                }
            }   
        */
				new RemoverMilitarController(removerMilitarService).handle(
					request,
					response,
				);
			},
		);
	}
}
