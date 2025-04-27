/*
  Warnings:

  - You are about to drop the column `apelido` on the `militar` table. All the data in the column will be lost.
  - Added the required column `nome_guerra` to the `militar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `militar` DROP COLUMN `apelido`,
    ADD COLUMN `nome_guerra` VARCHAR(191) NOT NULL;
