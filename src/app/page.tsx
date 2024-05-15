"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { login } from "./login";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = await login(formData.get("pass_id") as string);
    console.log(user);
    if (user == null) {
      router.push("/register");
    } else {
      router.push("/home");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-gray-200 to-gray-100">
      <form onSubmit={handleSubmit}>
        <div className="relative w-full max-w-[180px] p-4">
          <label htmlFor="id" className="form__label text-gray-500">
            ID
          </label>
          <input
            type="number"
            className="form__field block w-full border-b-2 border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            placeholder="ID"
            required
            id="pass_id"
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </main>
  );
}
