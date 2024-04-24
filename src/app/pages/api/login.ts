import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id } = req.body
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    })

    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ message: 'User not found' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}