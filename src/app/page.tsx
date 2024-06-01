import LoginForm from "@/components/login/LoginForm";
import { auth, signOut } from "@/auth";

export default async function LoginPage() {
  const session = await auth();
  console.log(session);

  if (!session) {
    await signOut();
  }

  return (
    <main className="from-gray-200 to-gray-100 flex h-screen min-h-screen flex-col items-center justify-center bg-gradient-to-b">
      <LoginForm />
    </main>
  );
}
