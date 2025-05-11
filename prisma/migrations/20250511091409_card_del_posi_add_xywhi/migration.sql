/*
  Warnings:

  - You are about to drop the column `posi` on the `card` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `card` DROP COLUMN `posi`,
    ADD COLUMN `h` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `i` VARCHAR(191) NOT NULL DEFAULT '0',
    ADD COLUMN `w` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `x` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `y` INTEGER NOT NULL DEFAULT 0;
