import BackButton from "@/components/BackButton";
import Link from "next/link";

import Button from "@/components/Button";
import LendItemsForm from "@/components/lend/LendItemsForm";

export default function main() {
  return (
    <main
      className={
        "relative grid min-h-screen grid-rows-[2fr_7fr_auto] gap-10 px-10 py-12"
      }
    >
      <h1 className={"text-center text-5xl"}>Scan items</h1>
      <LendItemsForm />
      <Button className={"mx-auto w-fit"}>Inleveren</Button>

      <BackButton>
        <Link href={"/home"}>Klaar</Link>
      </BackButton>
    </main>
  );
}
