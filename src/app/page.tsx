"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { login } from "./login";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const studentNumber = parseInt(formData.get("studentNumber") as string);

    const user = await login(studentNumber);

    if (!user) {
      router.push("/register");
    } else {
      router.push("/home");
    }
  };

  return (
    <main className="flex min-h-screen flex-col h-screen items-center justify-center bg-gradient-to-b from-gray-200 to-gray-100">
    <form onSubmit={handleSubmit} className="w-full max-w-[300px] space-y-4">
      <div className="relative p-4">
          <label htmlFor="studentnummer" className="form__label">Studentnummer</label>
          <input
            id="studentNumber"
            name="studentNumber"
            type="text"
            className="form__field block w-full p-2 focus:border-blue-500 focus:outline-none text-lg h-12"
            placeholder=""
            required
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-black font-bold py-2 px-4 border border-purple-700 rounded">
            login
          </button>
        </div>
      </form>
    </main>
  );
}
