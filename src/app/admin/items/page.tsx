import Link from "next/link";
import Button from "@/components/Button";
import BackButton from "@/components/BackButton";
import ItemsOverview from "@/components/admin/items/ItemsOverview";

export default function main() {
  return (
    <main
      className={
        "relative grid min-h-screen grid-rows-[2fr_7fr_auto] gap-10 px-10 py-12"
      }
    >
      <h1 className={"text-center text-5xl"}>Items zoeken</h1>
      <ItemsOverview />
      <Button className={"mx-auto w-fit"}>Nieuw item</Button>

      <BackButton>
        <Link href={"/home"}>Klaar</Link>
      </BackButton>
    </main>
  );
}
