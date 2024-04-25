'use server';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { firstName, lastEmail, studentNumber, className, uniqueId, id } = req.body;
    const user = await prisma.user.create({
      data: {
        id: id,
        first_name: firstName,
        last_name: lastEmail,
        student_number: studentNumber,
        class_name: className,
        pass_id: uniqueId,
      },
    });
    res.status(201).json(user);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}