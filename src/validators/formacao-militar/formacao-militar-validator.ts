import { date, z } from 'zod';

export const addFormacaoMilitaryValidator = z.object({
	curso: z.string().nonempty('preencha o campo curso'),
	instituicao: z.string().nonempty('preencha o campo instituicao'),
	dataInicio: z.string().datetime().nonempty('preencha o campo data de inicio'),
	dataFim: z.string().datetime().nonempty('preencha o campo data de termino'),
});
