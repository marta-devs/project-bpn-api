/*
  Warnings:

  - A unique constraint covering the columns `[militarId]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `usuario_militarId_key` ON `usuario`(`militarId`);
