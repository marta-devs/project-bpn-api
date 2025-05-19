-- DropForeignKey
ALTER TABLE `contacto_emergencia` DROP FOREIGN KEY `contacto_emergencia_militarId_fkey`;

-- DropForeignKey
ALTER TABLE `especializacoes` DROP FOREIGN KEY `especializacoes_militarId_fkey`;

-- DropForeignKey
ALTER TABLE `formacoes_academicas` DROP FOREIGN KEY `formacoes_academicas_militarId_fkey`;

-- DropForeignKey
ALTER TABLE `formacoes_militares` DROP FOREIGN KEY `formacoes_militares_militarId_fkey`;

-- DropForeignKey
ALTER TABLE `promocoes` DROP FOREIGN KEY `promocoes_militarId_fkey`;

-- DropIndex
DROP INDEX `contacto_emergencia_militarId_fkey` ON `contacto_emergencia`;

-- DropIndex
DROP INDEX `especializacoes_militarId_fkey` ON `especializacoes`;

-- DropIndex
DROP INDEX `formacoes_militares_militarId_fkey` ON `formacoes_militares`;

-- DropIndex
DROP INDEX `promocoes_militarId_fkey` ON `promocoes`;

-- AddForeignKey
ALTER TABLE `promocoes` ADD CONSTRAINT `promocoes_militarId_fkey` FOREIGN KEY (`militarId`) REFERENCES `militar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `formacoes_academicas` ADD CONSTRAINT `formacoes_academicas_militarId_fkey` FOREIGN KEY (`militarId`) REFERENCES `militar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `formacoes_militares` ADD CONSTRAINT `formacoes_militares_militarId_fkey` FOREIGN KEY (`militarId`) REFERENCES `militar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `especializacoes` ADD CONSTRAINT `especializacoes_militarId_fkey` FOREIGN KEY (`militarId`) REFERENCES `militar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contacto_emergencia` ADD CONSTRAINT `contacto_emergencia_militarId_fkey` FOREIGN KEY (`militarId`) REFERENCES `militar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuario` ADD CONSTRAINT `usuario_militarId_fkey` FOREIGN KEY (`militarId`) REFERENCES `militar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
