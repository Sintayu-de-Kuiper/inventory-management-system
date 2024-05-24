import ReturnItemsForm from "@/components/return/ReturnItemsForm";
import Button from "@/components/Button";

export default function ReturnItemsPage() {
  return (
    <main className={"grid min-h-screen grid-rows-[1fr_3fr_auto] py-12"}>
      <h1 className={"text-center text-5xl"}>Return Items</h1>
      <ReturnItemsForm />
      <Button className={"mx-auto"}>Inleveren</Button>
    </main>
  );
}
