/*
  Warnings:

  - You are about to alter the column `student_number` on the `User` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "student_number" INTEGER NOT NULL,
    "cohort" TEXT NOT NULL,
    "pass_id" TEXT NOT NULL
);
INSERT INTO "new_User" ("cohort", "first_name", "id", "last_name", "pass_id", "student_number") SELECT "cohort", "first_name", "id", "last_name", "pass_id", "student_number" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_student_number_key" ON "User"("student_number");
CREATE UNIQUE INDEX "User_pass_id_key" ON "User"("pass_id");
PRAGMA foreign_key_check("User");
PRAGMA foreign_keys=ON;
