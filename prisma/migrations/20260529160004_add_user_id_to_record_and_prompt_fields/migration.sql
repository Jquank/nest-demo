-- AlterTable
ALTER TABLE `aiimageprompt` ADD COLUMN `modelId` INTEGER NULL,
    ADD COLUMN `size` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `aiimagerecord` ADD COLUMN `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `AiImagePrompt` ADD CONSTRAINT `AiImagePrompt_modelId_fkey` FOREIGN KEY (`modelId`) REFERENCES `AiImageModel`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AiImageRecord` ADD CONSTRAINT `AiImageRecord_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
