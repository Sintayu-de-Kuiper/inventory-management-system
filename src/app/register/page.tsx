"use client";
import React, { FormEvent } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { createUser } from "./create";

export default function Register() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      studentNumber: parseInt(formData.get("studentNumber") as string),
      className: formData.get("className") as string,
      passId: crypto.randomUUID(),
    };

    const user = await createUser(userData);
    console.log(user);

    if (user) {
      alert("User registered successfully!");
      router.push("/home");
    } else {
      alert("User registration failed! Please try again later.");
      router.push("/");
    }
  };

  return (
    <div>
      <Head>
        <title>Register Page</title>
      </Head>
      <main className="flex min-h-screen flex-col h-screen items-center justify-center bg-gradient-to-b from-gray-200 to-gray-100">
      <h2 className="text-l font-bold mb-4 text-purple-700 redial-purple">Register</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-[300px] space-y-4">
        <div className="relative p-4">
          <label htmlFor="voornaam" className="form__label">Voornaam</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="form__field block w-full p-2 focus:border-blue-500 focus:outline-none text-lg h-12"
            placeholder=""
            required
          />
        </div>

        <div className="relative p-4">
          <label htmlFor="achternaam" className="form__label">Achternaam</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="form__field block w-full p-2 focus:border-blue-500 focus:outline-none text-lg h-12"
            placeholder=""
            required
          />
        </div>

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

        <div className="relative p-4">
          <label htmlFor="klasnaam" className="form__label">Klasnaam</label>
          <input
            id="className"
            name="className"
            type="text"
            className="form__field block w-full p-2 focus:border-blue-500 focus:outline-none text-lg h-12"
            placeholder=""
            required
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 cursor-pointer annuleer">
            Annuleer
          </div>
          <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-black font-bold py-2 px-4 border border-purple-700 rounded">
            Register
          </button>
        </div>
      </form>
    </main>
    </div>
  );
}
