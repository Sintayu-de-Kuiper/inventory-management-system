import NextAuth from "next-auth";
import prisma from "@/lib/prisma";
import Credentials from "@auth/core/providers/credentials";
import { LoginSchema } from "@/schemas";

export const { handlers, auth, signIn, signOut } = NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        // This should become passId
        studentNumber: { label: "Student Number", type: "number" },
      },
      authorize: async (credentials) => {
        try {
          const { studentNumber } = await LoginSchema.parseAsync(credentials);
          const user = await prisma.user.findUnique({
            where: { studentNumber },
          });

          if (!user) {
            return null;
          }

          return {
            ...user,
            fullName: `${user.firstName} ${user.lastName}`,
          };
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("JWT callback - user:", user);
      if (user) {
        token.id = user.id;
        token.fullName = `${user.firstName} ${user.lastName}`;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.studentNumber = user.studentNumber;
        token.cohort = user.cohort;
      }
      console.log("JWT callback - token:", token);
      return token;
    },
    async session({ session, token }) {
      console.log("Session callback - token:", token);
      session.user = {
        id: token.id as string,
        fullName: token.fullName as string,
        firstName: token.firstName as string,
        lastName: token.lastName as string,
        studentNumber: token.studentNumber as number,
        cohort: token.cohort as string,
        emailVerified: null,
        email: "",
      };
      console.log("Session callback - session:", session);
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
});
