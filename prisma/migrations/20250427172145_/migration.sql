/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `militar` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `apelido` VARCHAR(191) NOT NULL,
    `data_nascimento` DATETIME(3) NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,
    `patente` VARCHAR(191) NOT NULL,
    `situacao_militar` VARCHAR(191) NOT NULL,
    `nacionalidade` VARCHAR(191) NOT NULL,
    `estado_civil` VARCHAR(191) NOT NULL,
    `data_incorporacao` DATETIME(3) NOT NULL,
    `naturalidade` VARCHAR(191) NOT NULL,
    `telefone1` VARCHAR(191) NOT NULL,
    `telefone2` VARCHAR(191) NULL,
    `NIP` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `enderecoId` VARCHAR(191) NOT NULL,
    `dadosPessoaisId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `militar_NIP_key`(`NIP`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereco` (
    `id` VARCHAR(191) NOT NULL,
    `provincia` VARCHAR(191) NOT NULL,
    `municipio` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `rua` VARCHAR(191) NOT NULL,
    `numeroCasa` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dados_pessoais` (
    `id` VARCHAR(191) NOT NULL,
    `filiacao_paterna` VARCHAR(191) NOT NULL,
    `filiacao_materna` VARCHAR(191) NOT NULL,
    `numero_bi` VARCHAR(191) NOT NULL,
    `numero_passaporte` VARCHAR(191) NULL,
    `numero_seguranca_social` VARCHAR(191) NULL,
    `quantidade_filho` INTEGER NULL,
    `nome_esposa` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `dados_pessoais_numero_bi_key`(`numero_bi`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `promocoes` (
    `id` VARCHAR(191) NOT NULL,
    `promocao` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `dataPromocao` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `militarId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formacoes_academicas` (
    `id` VARCHAR(191) NOT NULL,
    `instituicao` VARCHAR(191) NOT NULL,
    `tipo_de_ensino` VARCHAR(191) NOT NULL,
    `classe` VARCHAR(191) NULL,
    `Ano` VARCHAR(191) NULL,
    `data_inicio` VARCHAR(191) NOT NULL,
    `data_fim` VARCHAR(191) NOT NULL,
    `curso` VARCHAR(191) NULL,
    `militarId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `formacoes_militares` (
    `id` VARCHAR(191) NOT NULL,
    `curso` VARCHAR(191) NOT NULL,
    `instituicao` VARCHAR(191) NOT NULL,
    `data_inicio` DATETIME(3) NOT NULL,
    `data_fim` DATETIME(3) NOT NULL,
    `militarId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `especializacoes` (
    `id` VARCHAR(191) NOT NULL,
    `curso` VARCHAR(191) NOT NULL,
    `instituicao` VARCHAR(191) NOT NULL,
    `data_inicio` DATETIME(3) NOT NULL,
    `data_fim` DATETIME(3) NOT NULL,
    `militarId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contacto_emergencia` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `grauParentesco` VARCHAR(191) NOT NULL,
    `militarId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `curso` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `tipo_curso` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `instituicao` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `tipo_curso` VARCHAR(191) NOT NULL,
    `localizacao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_ensino` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `historico` (
    `id` VARCHAR(191) NOT NULL,
    `titulo_historico` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `data_historico` DATETIME(3) NOT NULL,
    `militarId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `qrcode` VARCHAR(191) NOT NULL,
    `funcao` VARCHAR(191) NOT NULL,
    `militarId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `usuario_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `militar` ADD CONSTRAINT `militar_enderecoId_fkey` FOREIGN KEY (`enderecoId`) REFERENCES `endereco`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `militar` ADD CONSTRAINT `militar_dadosPessoaisId_fkey` FOREIGN KEY (`dadosPessoaisId`) REFERENCES `dados_pessoais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `promocoes` ADD CONSTRAINT `promocoes_militarId_fkey` FOREIGN KEY (`militarId`) REFERENCES `militar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `formacoes_academicas` ADD CONSTRAINT `formacoes_academicas_militarId_fkey` FOREIGN KEY (`militarId`) REFERENCES `militar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `formacoes_militares` ADD CONSTRAINT `formacoes_militares_militarId_fkey` FOREIGN KEY (`militarId`) REFERENCES `militar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `especializacoes` ADD CONSTRAINT `especializacoes_militarId_fkey` FOREIGN KEY (`militarId`) REFERENCES `militar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contacto_emergencia` ADD CONSTRAINT `contacto_emergencia_militarId_fkey` FOREIGN KEY (`militarId`) REFERENCES `militar`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
