import React from "react";
import Head from "next/head";
import BackButton from "@/components/BackButton";
import Link from "next/link";
import RegisterForm from "@/components/register/RegisterForm";

export default function Register() {
  return (
    <main
      className={
        "relative flex min-h-screen flex-col items-center justify-center px-8 py-12"
      }
    >
      <Head>
        <title>Register Page</title>
      </Head>

      <h1 className="mb-12 text-5xl font-bold ">Registratie</h1>

      <RegisterForm />

      <BackButton className="text-text-gray">
        <Link href={"/"}>Annuleer</Link>
      </BackButton>
    </main>
  );
}
