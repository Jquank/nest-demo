/*
Warnings:

- Added the required column `userId` to the `AiImageRecord` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `aiimageprompt`
ADD COLUMN `modelId` INTEGER NULL,
ADD COLUMN `size` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `aiimagerecord` ADD COLUMN `userId` INTEGER NULL;

-- Set default userId for existing records
UPDATE `aiimagerecord` SET `userId` = 1 WHERE `userId` IS NULL;

-- Make NOT NULL after data is populated
ALTER TABLE `aiimagerecord` MODIFY `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `AiImagePrompt`
ADD CONSTRAINT `AiImagePrompt_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `AiImageModel` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AiImageRecord`
ADD CONSTRAINT `AiImageRecord_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;