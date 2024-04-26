"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [id, setId] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(id);
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
      } else {
        console.error("Login failed");
        // router.push(`/register`);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
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
            value={id}
            onChange={handleChange} // Added onChange handler
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </main>
  );
}
