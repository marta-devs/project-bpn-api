export interface DAOGenerico<T = any> {
	buscarTodos: () => Promise<T[]>;
	buscarPorId: (id: string) => Promise<T | null>;
	criar: (dados: any) => Promise<T>;
	atualizar: (id: string, dados: any) => Promise<T>;
	excluir: (id: string) => Promise<T | null>;
}
