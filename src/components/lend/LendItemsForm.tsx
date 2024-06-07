import ItemsTable from "@/components/items/ItemsTable";

export default function LendItemsForm() {
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
      items={items}
      actionHeader={""}
      actionCell={() => (
        <button
          className={"text-primary-foreground hover:text-primary-foreground/60"}
        >
          {/* Cross character */}
          &#10006;
        </button>
      )}
    />
  );
}
