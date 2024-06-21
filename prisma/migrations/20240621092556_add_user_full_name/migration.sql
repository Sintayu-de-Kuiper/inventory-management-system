/*
  Warnings:

  - Added the required column `full_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "full_name" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "student_number" INTEGER NOT NULL,
    "cohort" TEXT NOT NULL,
    "pass_id" TEXT NOT NULL,
    "role" INTEGER NOT NULL DEFAULT 1
);
INSERT INTO "new_User" ("cohort", "first_name", "id", "last_name", "pass_id", "student_number") SELECT "cohort", "first_name", "id", "last_name", "pass_id", "student_number" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_student_number_key" ON "User"("student_number");
CREATE UNIQUE INDEX "User_pass_id_key" ON "User"("pass_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
