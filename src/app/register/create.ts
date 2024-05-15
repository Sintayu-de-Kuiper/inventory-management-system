"use server"
import { PrismaClient } from "@prisma/client";
import { type Prisma } from '@prisma/client'

const prisma = new PrismaClient();

interface RegisterData {
  firstName: string;
  lastName: string;
  studentNumber: number;
  className: string;
  passId: string;
}

export async function createUser(registerData: RegisterData) {
  "use server";
  return prisma.user.create({
    data: {
      first_name: registerData.firstName,
      last_name: registerData.lastName,
      student_number: registerData.studentNumber,
      class_name: registerData.className,
      pass_id: registerData.passId,
    },
  });
}
