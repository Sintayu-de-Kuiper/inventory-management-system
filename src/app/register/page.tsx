"use client";
import React, { FormEvent } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { createUser } from "./create";
import BackButton from "@/components/BackButton";
import Button from "@/components/Button";

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
    <main
      className={
        "relative flex h-screen min-h-screen flex-col items-center justify-center"
      }
    >
      <Head>
        <title>Register Page TODO: Fix responsiveness</title>
      </Head>

      <h1 className="mb-12 text-5xl font-bold ">Registratie</h1>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="p-4">
          <label htmlFor="firstName" className="text-gray-foreground text-lg">
            Voornaam
          </label>
          <input
            id="firstName"
            name="firstName"
            className="form__field block h-12 p-2 text-lg outline-none"
            required
          />
        </div>

        <div className="p-4">
          <label htmlFor="lastName" className="text-gray-foreground text-lg">
            Achternaam
          </label>
          <input
            id="lastName"
            name="lastName"
            className="form__field block h-12 w-full p-2 text-lg outline-none"
            required
          />
        </div>

        <div className="p-4">
          <label
            htmlFor="studentNumber"
            className="text-gray-foreground text-lg"
          >
            Studentnummer
          </label>
          <input
            id="studentNumber"
            name="studentNumber"
            className="form__field block h-12 w-full p-2 text-lg outline-none"
            required
          />
        </div>

        <div className="p-4">
          <label htmlFor="className" className="text-gray-foreground text-lg">
            Cohort (2020-2021)
          </label>
          <input
            id="className"
            name="className"
            className="form__field block h-12 w-full p-2 text-lg outline-none"
            required
          />
        </div>

        <Button className={"mx-auto mt-20"}>Registeer</Button>
        <BackButton className="text-text-gray">Annuleer</BackButton>
      </form>
    </main>
  );
}
