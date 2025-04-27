export interface DAOGenerico<T = any> {
	buscarTodos: () => Promise<T[]>;
	buscarPorId: (id: string) => Promise<T | null>;
	criar: (dados: T) => Promise<T>;
	atualizar: (id: string, dados: T) => Promise<T>;
	excluir: (id: string) => Promise<T | null>;
}
