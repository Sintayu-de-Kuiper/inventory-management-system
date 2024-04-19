-- CreateTable
CREATE TABLE "User" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "student_number" INTEGER NOT NULL,
    "class_name" TEXT NOT NULL,
    "unique_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_last_email_key" ON "User"("last_email");
