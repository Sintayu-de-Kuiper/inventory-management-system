"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface RegisterData {
  firstName: string;
  lastName: string;
  studentNumber: number;
  className: string;
  passId: string;
}

export async function createUser(formData: RegisterData) {
  "use server"
    return await prisma.user.create({
      data: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        student_number: formData.studentNumber,
        class_name: formData.className,
        pass_id: formData.passId,
      },
    });
}