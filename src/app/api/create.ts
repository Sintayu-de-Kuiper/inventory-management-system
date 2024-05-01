"use server"
import { PrismaClient } from "@prisma/client";
import { type Prisma } from '@prisma/client'

const prisma = new PrismaClient();

interface FormData {
  firstName: string;
  lastName: string;
  studentNumber: string;
  className: string;
  passId: string;
}

export async function createUser(formData: FormData) {
  try {
    await prisma.user.create({
      data: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        student_number: parseInt(formData.studentNumber),
        class_name: formData.className,
        pass_id: parseInt(formData.passId),
      } as Prisma.UserCreateInput, // Type assertion
    });
    return true;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user. Please try again later.");
  }
}
