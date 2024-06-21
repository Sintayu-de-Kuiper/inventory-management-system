import { ReactNode } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await auth();

  if (!session) {
    return redirect("/");
  }

  return children;
}
