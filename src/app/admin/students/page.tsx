import BackButton from "@/components/BackButton";
import Link from "next/link";

import Button from "@/components/Button";
import ZoekenTable from "@/components/students/Zoeken";

export default function main() {
  return (
    <main
      className={
        "relative flex min-h-screen flex-col items-center gap-10 px-10 py-12"
      }
    >
      <h1 className={"text-center text-5xl"}>Scan items</h1>
      <input
        type="text"
        className="bg-transparent   h-1/5 w-3/5 justify-self-center rounded-full p-2 px-2 shadow-md outline-none"
        placeholder="Search..."
      />
      <div className="flex-grow">
        <ZoekenTable />
      </div>
      <Button className={"mx-auto w-fit"}>Inleveren</Button>

      <BackButton>
        <Link href={"/home"}>Klaar</Link>
      </BackButton>
    </main>
  );
}
