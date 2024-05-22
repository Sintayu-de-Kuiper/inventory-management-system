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
      passId: formData.get("passId") as string,
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
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-gray-200 to-gray-100">
        <h1 className="text-3xl font-bold">Register Page</h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
          <input type="text" name="lastName" placeholder="Last Name" required />
          <input
            type="number"
            name="studentNumber"
            placeholder="Student Number"
            required
          />
          <input
            type="text"
            name="className"
            placeholder="Class Name"
            required
          />
          <input type="text" name="passId" placeholder="Pass ID" required />
          <button className="mt-4 rounded bg-blue-500 px-4 py-2 text-white">
            Register
          </button>
        </form>
      </main>
    </div>
  );
}
