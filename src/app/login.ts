"use server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function login(pass_id: string) {
    "use server"
    return await prisma.user.findFirst({
        where: {
            pass_id,
        }
    });
}