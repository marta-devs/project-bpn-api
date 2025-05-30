export abstract class DAOGenerico<ModelPrisma = any> {
	constructor(private readonly model: any) {}

	async buscarTodos(include?: any): Promise<ModelPrisma[]> {
		return include
			? await this.model.findMany(include)
			: await this.model.findMany();
	}

	async buscarPorId(id: string): Promise<ModelPrisma | null> {
		return await this.model.findUnique({
			where: {
				id,
			},
		});
	}

	async criar(dados: any): Promise<ModelPrisma> {
		return await this.model.create({
			data: { ...dados },
		});
	}

	async atualizar(id: string, dados: any): Promise<ModelPrisma> {
		return await this.model.update({
			where: {
				id,
			},
			data: { ...dados },
		});
	}

	async excluir(id: string): Promise<ModelPrisma | null> {
		return this.model.delete({
			where: {
				id,
			},
		});
	}
}
