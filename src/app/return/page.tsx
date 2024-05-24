import ReturnItemsForm from "@/components/return/ReturnItemsForm";
import Button from "@/components/Button";
import BackButton from "@/components/BackButton";
import Link from "next/link";

export default function ReturnItemsPage() {
  return (
    <main
      className={
        "relative grid min-h-screen grid-rows-[2fr_7fr_auto] gap-10 px-10 py-12"
      }
    >
      <h1 className={"text-center text-5xl"}>Items inleveren</h1>
      <ReturnItemsForm />
      <Button className={"mx-auto w-fit"}>Inleveren</Button>

      <BackButton>
        <Link href={"/home"}>Klaar</Link>
      </BackButton>
    </main>
  );
}
