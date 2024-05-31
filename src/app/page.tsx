"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import cuid from "cuid";
import { login } from "@/app/login";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const studentNumber = parseInt(formData.get("studentNumber") as string);

    const user = await login(studentNumber);

    if (!user) {
      // This should be a real passId soon. Now not implemented and id is generated.
      router.push(`/register/${cuid()}/${studentNumber}`);
    } else {
      router.push("/home");
    }
  };

  return (
    <main className="from-gray-200 to-gray-100 flex h-screen min-h-screen flex-col items-center justify-center bg-gradient-to-b">
      <form
        onSubmit={handleSubmit}
        className=" flex w-64 flex-col items-center "
      >
        <div>
          <label
            htmlFor="studentnummer"
            className={"text-lg text-gray-foreground"}
          >
            Studentnummer
          </label>
          <input
            id="studentNumber"
            name="studentNumber"
            type="number"
            className="form__field h-12 w-full p-2 text-lg outline-none"
            required
          />
        </div>
        <Button className={"mt-10"}>Login</Button>
      </form>
    </main>
  );
}
