/*
  Warnings:

  - Added the required column `gender` to the `BabyName` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BabyName" ADD COLUMN     "gender" TEXT NOT NULL;
