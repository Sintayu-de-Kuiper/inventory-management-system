"use client";
import { FormEvent, useState } from "react";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/navigation";
const prisma = new PrismaClient();

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // get the id from the input field
    const id = (e.target as any).elements.id.value;

    // log the id
    console.log(id);

    // use the login function
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const user = await res.json();
        console.log(user);
        router.push(`/main`);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
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
            id="id"
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </main>
  );
}
