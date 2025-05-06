-- DropForeignKey
ALTER TABLE `militar` DROP FOREIGN KEY `militar_dadosPessoaisId_fkey`;

-- DropForeignKey
ALTER TABLE `militar` DROP FOREIGN KEY `militar_enderecoId_fkey`;

-- DropIndex
DROP INDEX `militar_dadosPessoaisId_fkey` ON `militar`;

-- DropIndex
DROP INDEX `militar_enderecoId_fkey` ON `militar`;

-- AddForeignKey
ALTER TABLE `militar` ADD CONSTRAINT `militar_enderecoId_fkey` FOREIGN KEY (`enderecoId`) REFERENCES `endereco`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `militar` ADD CONSTRAINT `militar_dadosPessoaisId_fkey` FOREIGN KEY (`dadosPessoaisId`) REFERENCES `dados_pessoais`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
