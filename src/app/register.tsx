import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";

async function createUser(formData: {
  firstName: string;
  lastName: string;
  studentNumber: string;
  className: string;
  passId: string;
}) {
  try {
    const router = useRouter();
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push(`/page`);
    } else {
      throw new Error("Failed to register user");
    }
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
}

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    studentNumber: "",
    className: "",
    passId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData, // Copy the existing state
      [e.target.name]: e.target.value, // Update the specific field
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUser(formData);
      alert("User registered successfully!");
    } catch (error) {
      alert("Error during registration: " + error);
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
            onChange={handleChange}
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
            type="number"
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
