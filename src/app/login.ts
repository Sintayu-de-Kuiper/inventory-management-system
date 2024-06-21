"use server";

import { signIn } from "@/auth";

export async function login(studentNumber: number) {
  "use server";
  try {
    return await signIn("credentials", {
      studentNumber,
      redirect: false,
    });
  } catch (error) {
    return null;
  }
}
