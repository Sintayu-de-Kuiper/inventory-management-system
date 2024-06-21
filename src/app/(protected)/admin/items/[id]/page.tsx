import Button from "@/components/Button";
import React from "react";
import BackButton from "@/components/BackButton";
import Link from "next/link";

export default function main() {
  return (
    <main
      className={
        "relative flex min-h-screen flex-col items-center justify-center"
      }
    >
      <h1 className="text-5xl">Wijzig: &lt;Item&gt;</h1>

      <form className={"mt-10 flex  flex-col"}>
        <div className="p-4">
          <label htmlFor="name" className="text-lg text-gray-foreground">
            Naam
          </label>
          <input
            id="name"
            name="name"
            className="form__field block h-12 p-2 text-lg outline-none"
            required
          />
        </div>
        <div className="p-4">
          <label htmlFor="access" className="text-lg text-gray-foreground">
            Toegang
          </label>
          <select
            className={"form__field block h-12 p-2 text-lg outline-none"}
            id="access"
            name="access"
            required
          >
            <option value="everyone">Iedereen</option>
            <option value="teachers">Docenten</option>
          </select>
        </div>
        <div className="p-4">
          <label htmlFor="stock" className="text-lg text-gray-foreground">
            Voorraad
          </label>
          <input
            id="stock"
            name="stock"
            className="form__field block h-12 p-2 text-lg outline-none"
            required
          />
        </div>
        <Button className={"mt-10 "}>Opslaan</Button>
      </form>

      <BackButton>
        <Link href={"/admin/items"}>Terug</Link>
      </BackButton>
    </main>
  );
}
