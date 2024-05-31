"use server";
import { RegisterDataSchema } from "@/schemas";
import { z } from "zod";
import prisma from "@/lib/prisma";

interface SuccessCreateUserResponse {
  success: true;
  user: RegisterData;
}

interface ErrorCreateUserResponse {
  success: false;
  errors: string[];
}

export async function createUser(
  registerData: z.infer<typeof RegisterDataSchema>,
): SuccessCreateUserResponse | ErrorCreateUserResponse {
  "use server";

  const existingUser = await prisma.user.findUnique({
    where: {
      student_number: registerData.studentNumber,
    },
  });

  if (existingUser) {
    return {
      success: false,
      errors: ["User with this student number already exists"],
    };
  }

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
