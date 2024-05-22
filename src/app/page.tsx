"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { login } from "./login";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const passId = formData.get("passId") as string;

    const user = await login(passId);

    if (!user) {
      router.push("/register");
    } else {
      router.push("/home");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-gray-200 to-gray-100">
      <form onSubmit={handleSubmit}>
        <label htmlFor="id" className="form__label text-gray-500">
          Pas ID
        </label>
        <input
          type="number"
          className="form__field mt-4 block w-full border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          placeholder="Pas ID"
          name={"passId"}
          required
        />
        <button>Log in</button>
      </form>
    </main>
  );
}
