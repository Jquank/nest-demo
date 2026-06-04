/*
  Warnings:

  - You are about to drop the column `modelId` on the `aiimageprompt` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `aiimageprompt` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `aiimageprompt` DROP FOREIGN KEY `AiImagePrompt_modelId_fkey`;

-- DropIndex
DROP INDEX `AiImagePrompt_modelId_fkey` ON `aiimageprompt`;

-- AlterTable
ALTER TABLE `aiimageprompt` DROP COLUMN `modelId`,
    DROP COLUMN `size`,
    ADD COLUMN `isSystem` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `AiImagePrompt` ADD CONSTRAINT `AiImagePrompt_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
