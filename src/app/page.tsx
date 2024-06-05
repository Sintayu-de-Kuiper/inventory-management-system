import LoginForm from "@/components/login/LoginForm";

export default async function LoginPage() {
  return (
    <main className="from-gray-200 to-gray-100 flex h-screen min-h-screen flex-col items-center justify-center bg-gradient-to-b">
      <LoginForm />
    </main>
  );
}
