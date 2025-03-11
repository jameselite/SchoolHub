/*
  Warnings:

  - Added the required column `created_at` to the `Classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Classes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `Lessons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Lessons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `Parents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Parents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `Teachers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Teachers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Classes" ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "updated_at" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Lessons" ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "updated_at" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Parents" ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "updated_at" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Students" ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "updated_at" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Teachers" ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "updated_at" TEXT NOT NULL;
