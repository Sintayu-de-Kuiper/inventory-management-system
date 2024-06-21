import BackButton from "@/components/BackButton";
import Button from "@/components/Button";
import Link from "next/link";

export default function AdminHome() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl">Hallo Admin &lt;naam&gt;!</h1>
      <div className={"mt-12 grid grid-cols-3 gap-5"}>
        <Button>
          <Link href={"/admin/items"}>items</Link>
        </Button>
        <Button>
          <Link href={"/admin/users"}>users</Link>
        </Button>
      </div>
      <BackButton>
        <Link href={"/admin"}>Terug</Link>
      </BackButton>
    </main>
  );
}
