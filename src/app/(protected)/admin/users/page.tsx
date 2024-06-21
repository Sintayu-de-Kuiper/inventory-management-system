import BackButton from "@/components/BackButton";
import Link from "next/link";
import SearchStudents from "@/components/admin/students/SearchStudents";

export default function main() {
  return (
    <main
      className={
        "relative flex min-h-screen flex-col items-center gap-10 px-10 py-12"
      }
    >
      <SearchStudents />

      <BackButton>
        <Link href={"/admin"}>Klaar</Link>
      </BackButton>
    </main>
  );
}
