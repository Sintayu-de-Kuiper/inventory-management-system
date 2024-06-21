"use server";

import prisma from "@/lib/prisma";
import { User } from "@/types";
import { signIn } from "@/auth";

interface SuccessCreateUserResponse {
  success: true;
  user: User;
}

interface ErrorCreateUserResponse {
  success: false;
  errors: string[];
}

// User object without the id field
type UserWithoutId = Omit<User, "id">;

export async function createUser(
  userData: UserWithoutId,
): Promise<SuccessCreateUserResponse | ErrorCreateUserResponse> {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        studentNumber: userData.studentNumber,
      },
    });
    if (existingUser) {
      return {
        success: false,
        errors: ["User with this student number already exists"],
      };
    }

    const user = await prisma.user.create({
      data: userData,
    });

    await signIn("credentials", {
      studentNumber: user.studentNumber,
      redirect: false,
    });

    return {
      success: true,
      user: user,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        errors: [error.message],
      };
    }
    return {
      success: false,
      errors: ["An unknown error occurred"],
    };
  }
}
