import ItemsTable from "@/components/items/ItemsTable";
import Search from "@/components/admin/items/Search";
import Link from "next/link";

export default function ItemsOverview() {
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

  return (
    <>
      <Search />
      <ItemsTable
        items={items}
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
    </>
  );
}
