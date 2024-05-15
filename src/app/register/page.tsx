"use client";
import React, { ChangeEvent, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { createUser } from "./create";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    studentNumber: "",
    className: "",
    passId: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Update the specific field
    });
  };

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value), // Update the specific field
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await createUser({
      ...formData,
      studentNumber: parseInt(formData.studentNumber),
    });
    console.log(user);
    alert("User registered successfully!");
    if (user) {
      router.push("/home");
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
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="studentNumber"
            placeholder="Student Number"
            value={formData.studentNumber}
            onChange={handleNumberChange}
            required
          />
          <input
            type="text"
            name="className"
            placeholder="Class Name"
            value={formData.className}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="passId"
            placeholder="Pass ID"
            value={formData.passId}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
          >
            Register
          </button>
        </form>
      </main>
    </div>
  );
}
