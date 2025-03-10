/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Students" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "student_code" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,
    "fullname" TEXT NOT NULL,
    "degree" INTEGER NOT NULL,
    "parentid" INTEGER NOT NULL,
    "classid" INTEGER NOT NULL,

    CONSTRAINT "Students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Parents" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "student_code" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Teachers" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "teacher_code" TEXT NOT NULL,
    "credit_card" TEXT NOT NULL,
    "fullname" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Classes" (
    "id" SERIAL NOT NULL,
    "teacherid" INTEGER NOT NULL,
    "class_code" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lessons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Lessons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_StudentsLessons" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_StudentsLessons_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Students_phone_key" ON "Students"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Students_email_key" ON "Students"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Students_student_code_key" ON "Students"("student_code");

-- CreateIndex
CREATE UNIQUE INDEX "Parents_id_key" ON "Parents"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Parents_email_key" ON "Parents"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Parents_phone_key" ON "Parents"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Parents_student_code_key" ON "Parents"("student_code");

-- CreateIndex
CREATE UNIQUE INDEX "Teachers_id_key" ON "Teachers"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Teachers_phone_key" ON "Teachers"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Teachers_email_key" ON "Teachers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Teachers_teacher_code_key" ON "Teachers"("teacher_code");

-- CreateIndex
CREATE UNIQUE INDEX "Teachers_credit_card_key" ON "Teachers"("credit_card");

-- CreateIndex
CREATE UNIQUE INDEX "Classes_id_key" ON "Classes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Classes_class_code_key" ON "Classes"("class_code");

-- CreateIndex
CREATE UNIQUE INDEX "Lessons_id_key" ON "Lessons"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Lessons_name_key" ON "Lessons"("name");

-- CreateIndex
CREATE INDEX "_StudentsLessons_B_index" ON "_StudentsLessons"("B");

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_parentid_fkey" FOREIGN KEY ("parentid") REFERENCES "Parents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Students" ADD CONSTRAINT "Students_classid_fkey" FOREIGN KEY ("classid") REFERENCES "Classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_teacherid_fkey" FOREIGN KEY ("teacherid") REFERENCES "Teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentsLessons" ADD CONSTRAINT "_StudentsLessons_A_fkey" FOREIGN KEY ("A") REFERENCES "Lessons"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentsLessons" ADD CONSTRAINT "_StudentsLessons_B_fkey" FOREIGN KEY ("B") REFERENCES "Students"("id") ON DELETE CASCADE ON UPDATE CASCADE;
