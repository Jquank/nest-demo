/*
  Warnings:

  - Added the required column `value` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `card` ADD COLUMN `value` VARCHAR(191) NOT NULL,
    MODIFY `type` VARCHAR(191) NOT NULL DEFAULT '50';
