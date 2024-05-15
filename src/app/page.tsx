// page.tsx
"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "./login";

export default function LoginPage() {
  const router = useRouter();
  const [pass_id, setPass_id] = useState("");


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = await login(pass_id);
    console.log(user);
    if (user == null) {
      router.push("/register");
    } else {
      router.push("/home");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass_id(e.target.value);


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
            id="pass_id"
            value={pass_id}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </main>
  );
}
}
