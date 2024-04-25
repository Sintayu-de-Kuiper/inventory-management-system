'use server';
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function login(req: NextApiRequest, res: NextApiResponse, id:any) {
  if (req.method == 'POST') {
    const { id } = req.body
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    })

    if (user) {
      return user;
    } else {
      res.status(404).json({ message: 'User not found' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}


  