import prisma from "../libs/prisma";
import { DAOGenerico } from "./DAO";
import type { Militar } from "../../generated/prisma";
import { UsuarioStatus } from "../constants/usuario-status";

export class MilitarRepository extends DAOGenerico<Militar> {
  constructor() {
    super(prisma.militar);
  }

  async excluir(id: string): Promise<Militar | null> {
    const usuario = await prisma.usuario.findFirst({
      where: {
        militarId: id,
      },
    });

    await prisma.usuario.update({
      where: {
        id: usuario?.id,
      },
      data: {
        status: UsuarioStatus.REMOVIDO,
      },
    });

    return await prisma.militar.findFirst({
      where: {
        id,
      },
    });
  }
  async buscarPorNIP(nip: string): Promise<Militar | null> {
    return await prisma.militar.findUnique({
      where: {
        NIP: nip,
      },
      include: {
        usuario: true,
      },
    });
  }
}
