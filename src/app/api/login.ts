'use server';
// app/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { id } = req.body;
      const user = await prisma.user.findUnique({
        where: {
          id: parseInt(id),
        }
      });

      if (user) {
        res.status(200).json(user);
      } else {
        console.log("User not found")
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}



  