import ItemsTable from "@/components/items/ItemsTable";
import TrashIcon from "@/components/TrashIcon"

interface LendItemsFormProps {
  search: string;
}

export default function LendItemsForm({search}: Readonly<LendItemsFormProps>) {
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
    <ItemsTable
      items={items.filter((item) => item.name.includes(search))}
      actionHeader={""}
      actionCell={
        <button
          className={"text-destructive hover:text-destructive/90 "}
        >
        <TrashIcon />
        </button>
      }
    />
  );
}
