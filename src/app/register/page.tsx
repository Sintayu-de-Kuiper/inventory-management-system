"use client";
import React, { FormEvent } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { createUser } from "./create";
import { Montserrat } from "next/font/google";
import BackButton from "@/components/BackButton";

const montserrat = Montserrat({ subsets: ["latin"] });

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
    <div className="relative flex flex-col items-center">
      <Head>
        <title>Register Page</title>
      </Head>
      <main
        className={`${montserrat.className}  from-gray-200 to-gray-100 flex h-screen min-h-screen flex-col items-center justify-center bg-gradient-to-b`}
      >
        <h1 className="mb-12 text-5xl font-bold ">Registratie</h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[300px] space-y-4"
        >
          <div className="relative p-4">
            <label htmlFor="voornaam" className="form__label">
              Voornaam
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="form__field focus:border-blue-500 block h-12 w-full p-2 text-lg focus:outline-none"
              placeholder=""
              required
            />
          </div>

          <div className="relative p-4">
            <label htmlFor="achternaam" className="form__label">
              Achternaam
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="form__field focus:border-blue-500 block h-12 w-full p-2 text-lg focus:outline-none"
              placeholder=""
              required
            />
          </div>

          <div className="relative p-4">
            <label htmlFor="studentnummer" className="form__label">
              Studentnummer
            </label>
            <input
              id="studentNumber"
              name="studentNumber"
              type="text"
              className="form__field focus:border-blue-500 block h-12 w-full p-2 text-lg focus:outline-none"
              placeholder=""
              required
            />
          </div>

          <div className="relative p-4">
            <label htmlFor="klasnaam" className="form__label">
              Cohort (2020-2021)
            </label>
            <input
              id="className"
              name="className"
              type="text"
              className="form__field focus:border-blue-500 block h-12 w-full p-2 text-lg focus:outline-none"
              placeholder=""
              required
            />
          </div>
          <button className="hover:bg-darker-accent absolute bottom-9 m-3 rounded-full bg-accent px-20 py-2 text-xl font-semibold text-primary">
            Registeer
          </button>
          <BackButton>
            <div className="text-text-gray  ">Annuleer</div>
          </BackButton>
        </form>
      </main>
    </div>
  );
}
