import Link from "next/link";
import Button from "@/components/Button";
import BackButton from "@/components/BackButton";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export default async function main() {
  const session = await auth();

  if (!session) {
    return redirect("/");
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl">Hallo {session.user.firstName}!</h1>
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
        <form
          action={async () => {
            "use server";
            await signOut();
            return redirect("/");
          }}
        >
          <button>Log Uit</button>
        </form>
      </BackButton>
    </main>
  );
}
