import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReactNode } from "react";
import { Item } from "@/types";
import ItemRow from "@/components/items/ItemRow";

interface ItemTableProps {
  items: Item[];
  actionHeader: ReactNode;
  actionCell: (item: Item) => ReactNode;
  className? : string;
}

export default function ItemsTable({
  items,
  actionHeader,
  actionCell,
  className,
}: Readonly<ItemTableProps>) {
  return (
    <Table className={`m-auto w-full  max-w-4xl ${className}`}>
      <TableHeader>
        <TableRow>
          <TableHead>Naam</TableHead>
          <TableHead>Uitleen Periode</TableHead>
          <TableHead>Notitie</TableHead>
          <TableHead className={"w-8"}>Aantal</TableHead>
          <TableHead className={"w-8"}>{actionHeader}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <ItemRow key={item.id} item={item} actionCell={actionCell(item)} />
        ))}
      </TableBody>
    </Table>
  );
}
