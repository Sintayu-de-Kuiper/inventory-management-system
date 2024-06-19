import BackButton from "@/components/BackButton";
import Link from "next/link";

import Button from "@/components/Button";
import SearchBar from "@/components/students/SearchBar";
import SearchStudents from "@/components/students/SearchStudents";

export default function main() {

  return (
    <main
      className={
        "relative flex min-h-screen flex-col items-center gap-10 px-10 py-12"
      }
    >
      <SearchStudents nts />

      <BackButton>
        <Link href={"/home"}>Klaar</Link>
      </BackButton>
    </main>
  );
}
