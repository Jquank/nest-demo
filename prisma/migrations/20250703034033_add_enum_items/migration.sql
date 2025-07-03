/*
  Warnings:

  - You are about to drop the column `label` on the `enum` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `enum` table. All the data in the column will be lost.
  - Made the column `name` on table `enum` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `enum` DROP COLUMN `label`,
    DROP COLUMN `value`,
    MODIFY `name` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `EnumItems` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `enLabel` VARCHAR(191) NULL,
    `desc` VARCHAR(191) NULL,
    `enable` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `enumId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EnumItems` ADD CONSTRAINT `EnumItems_enumId_fkey` FOREIGN KEY (`enumId`) REFERENCES `Enum`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
