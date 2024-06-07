import ItemsTable from "@/components/items/ItemsTable";

export default function ReturnItemsForm() {
  const items = [
    {
      id: "1",
      name: "Arduino Uno",
      period: "17/05/2024 - 24/05/2024",
      note: "Inclusief 10 breadboard kabeltjes",
      amount: 1,
    },
    {
      id: "2",
      name: "Arduino Dos",
      period: "17/05/2024 - 24/05/2024",
      note: "Inclusief 2 breadboards",
      amount: 1,
    },
  ];

  return (
    <ItemsTable
      items={items}
      actionHeader={""}
      actionCell={() => <input type="checkbox" />}
    />
  );
}
