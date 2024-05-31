import Link from "next/link";
import Button from "@/components/Button";
import BackButton from "@/components/BackButton";

export default function main() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl">Hallo &lt;naam&gt;!</h1>
      <div className={"mt-12 grid grid-cols-3 gap-5"}>
        <Button>
          <Link href={"/return"}>Inleveren</Link>
        </Button>
        <Button>
          <Link href={"/lend"}>Lenen</Link>
        </Button>
        <Button>
          <Link href={"/admin"}>Beheer</Link>
        </Button>
      </div>
      <BackButton>
        <Link href={"/"}>Log Uit</Link>
      </BackButton>
    </main>
  );
}
