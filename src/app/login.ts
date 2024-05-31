"use server";

import { signIn } from "@/auth";

export async function login(studentNumber: number) {
  "use server";
  return signIn("credentials", {
    studentNumber,
    redirect: false,
  });
}
