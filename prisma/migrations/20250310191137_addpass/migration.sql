/*
  Warnings:

  - Added the required column `password` to the `Parents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Teachers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Parents" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Students" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Teachers" ADD COLUMN     "password" TEXT NOT NULL;
