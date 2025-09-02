/*
  Warnings:

  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `militar` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `funcao` to the `militar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `militar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qrcode` to the `militar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `militar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `militar` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `usuario` DROP FOREIGN KEY `usuario_militarId_fkey`;

-- AlterTable
ALTER TABLE `militar` ADD COLUMN `funcao` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `qrcode` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `usuario`;

-- CreateIndex
CREATE UNIQUE INDEX `militar_username_key` ON `militar`(`username`);
