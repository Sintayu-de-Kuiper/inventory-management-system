"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function login(studentNumber: number) {
  "use server";
  return prisma.user.findFirst({
    where: {
      studentNumber,
    },
  });
}
