"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function login(passId: string) {
  "use server";
  return prisma.user.findFirst({
    where: {
      pass_id: passId,
    },
  });
}
