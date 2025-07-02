-- CreateTable
CREATE TABLE `Enum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('SYSTEM', 'BUSINESS', 'NORMAL', 'FIELD') NOT NULL DEFAULT 'NORMAL',
    `code` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `label` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NULL,
    `enable` BOOLEAN NOT NULL DEFAULT true,

    UNIQUE INDEX `Enum_code_key`(`code`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
