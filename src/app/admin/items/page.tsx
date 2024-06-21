import Link from "next/link";
import BackButton from "@/components/BackButton";
import SearchItems from "@/components/admin/items/SearchItems";

export default function ItemOverview() {
  return (
    <main
      className={
        "relative flex min-h-screen flex-col items-center gap-10 px-10 py-12"
      }
    >
      <SearchItems />

      <BackButton>
        <Link href={"/admin"}>Klaar</Link>
      </BackButton>
    </main>
  );
}
