import type { Usuario, Militar, Promocoes } from "../../generated/prisma";
import prisma from "../../src/libs/prisma";

export const updateFakeMilitar = (data: Militar) => {
  return prisma.militar.update({
    where: {
      id: data.id,
    },
    data,
  });
};

export const updateUsuario = (data: Usuario) => {
  return prisma.usuario.update({
    where: {
      id: data.id,
    },
    data,
  });
};

export const updatePromocao = (data: Promocoes) => {
  return prisma.promocoes.update({
    where: { id: data.id },
    data,
  });
};
