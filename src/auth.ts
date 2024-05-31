import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import Credentials from "@auth/core/providers/credentials";
import { LoginSchema } from "@/schemas";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        // This should become passId
        studentNumber: { label: "Student Number", type: "number" },
      },
      authorize: async (credentials) => {
        try {
          const { studentNumber } = await LoginSchema.parseAsync(credentials);

          return await prisma.user.findUnique({
            where: { studentNumber },
          });
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
});
