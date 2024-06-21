/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `class_name` on the `User` table. All the data in the column will be lost.
  - The primary key for the `inventory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `cohort` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "student_number" BIGINT NOT NULL,
    "cohort" TEXT NOT NULL,
    "pass_id" TEXT NOT NULL
);
INSERT INTO "new_User" ("first_name", "id", "last_name", "pass_id", "student_number") SELECT "first_name", "id", "last_name", "pass_id", "student_number" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_student_number_key" ON "User"("student_number");
CREATE UNIQUE INDEX "User_pass_id_key" ON "User"("pass_id");
CREATE TABLE "new_inventory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_inventory" ("description", "id", "name") SELECT "description", "id", "name" FROM "inventory";
DROP TABLE "inventory";
ALTER TABLE "new_inventory" RENAME TO "inventory";
PRAGMA foreign_key_check("User");
PRAGMA foreign_key_check("inventory");
PRAGMA foreign_keys=ON;
