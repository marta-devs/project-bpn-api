import { OperationCrud } from "../../constants/operation-crud";
import type { MilitarRepository } from "../../repositories/militar-repository";
import type { PromocaoRepositry } from "../../repositories/promocao-repository";
import {
  NotFoundError,
  UnprocessableEntityError,
} from "../../utils/api-errors";
import { BaseService } from "../base-service";

interface ActualizarPromocaoInput {
  id: string;
  promocao: string;
  descricao: string;
  dataPromocao: Date;
  militarId: string;
}
interface ActualizarPromocaoOutput {
  id: string;
  promocao: string;
  descricao: string;
  dataPromocao: Date;
  militarId: string;
  createdAt: Date;
  updatedAt: Date;
}
export class ActulizarPromocaoService extends BaseService<
  ActualizarPromocaoInput,
  ActualizarPromocaoOutput
> {
  constructor(
    private readonly promocaoRespository: PromocaoRepositry,
    private readonly militarRepository: MilitarRepository
  ) {
    super(promocaoRespository, OperationCrud.UPDATE);
  }
  public async execute(
    inputDTO: ActualizarPromocaoInput,
    user?: any
  ): Promise<any | any> {
    const promocao: ActualizarPromocaoInput =
      await this.promocaoRespository.buscarPorId(inputDTO.id.militar_id);
    if (!promocao) {
      throw new NotFoundError("Promoção não encontrada");
    }
    const militar = await this.militarRepository.buscarPorId(
      promocao.militarId
    );
    if (!militar) {
      throw new NotFoundError("Militar não encontrado");
    }
    if (
      militar.situacaoMilitar === "REMOVIDO" ||
      militar.situacaoMilitar === "FALECIDO" ||
      militar.situacaoMilitar !== "ACTIVO"
    ) {
      throw new UnprocessableEntityError(
        "Não é possível atribuir promoção ao militar devido ao seu status"
      );
    }
    const newInput = {
      id: promocao.id,
      promocao: inputDTO.promocao,
      descricao: inputDTO.descricao,
      dataPromocao: inputDTO.dataPromocao,
      militarId: militar.id,
    };
    return await this.executeBase(newInput);
  }
}
