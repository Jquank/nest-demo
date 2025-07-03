/*
  Warnings:

  - The values [FIELD] on the enum `Enum_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `enum` MODIFY `type` ENUM('SYSTEM', 'BUSINESS', 'NORMAL', 'COLUMN') NOT NULL DEFAULT 'NORMAL';
