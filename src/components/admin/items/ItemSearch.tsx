import ItemsTable from "@/components/items/ItemsTable";
import Link from "next/link";

interface LendItemsFormProps {
  search: string;
}

export default function ItemSearch({ search }: Readonly<LendItemsFormProps>) {
  const items = [
    {
      id: "1",
      name: "ESP32",
      period: "17/05/2024 - 24/05/2024",
      note: "Inclusief een breadboard en 6 jumper kaabeltjes",
      amount: 2,
    },
    {
      id: "2",
      name: "Arduino hue",
      period: "17/05/2024 - 24/05/2024",
      note: "Inclusief 1 breadboard en een led",
      amount: 3,
    },
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <ItemsTable
      items={filteredItems}
      actionHeader={""}
      actionCell={(item) => (
        <div className={"flex gap-3"}>
          <Link
            href={"/admin/items/" + item.id}
            className={
              "text-xl text-primary-foreground hover:text-primary-foreground/60"
            }
          >
            {/* Pencil character */}
            &#9998;
          </Link>
          <button
            className={"text-xl text-destructive hover:text-destructive/60"}
          >
            {/* Cross character */}
            &#10006;
          </button>
        </div>
      )}
    />
  );
}
