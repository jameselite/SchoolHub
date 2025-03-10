-- DropForeignKey
ALTER TABLE "Students" DROP CONSTRAINT "Students_classid_fkey";

-- DropForeignKey
ALTER TABLE "Students" DROP CONSTRAINT "Students_parentid_fkey";

-- AlterTable
ALTER TABLE "Students" ALTER COLUMN "parentid" DROP NOT NULL,
ALTER COLUMN "classid" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_parentid_fkey" FOREIGN KEY ("parentid") REFERENCES "Parents"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_classid_fkey" FOREIGN KEY ("classid") REFERENCES "Classes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
