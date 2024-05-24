import { TableCell, TableRow } from "@/components/ui/table";
import { Item } from "@/types";
import { ReactNode } from "react";

interface ItemRowProps {
  item: Item;
  actionCell: ReactNode;
}
export default function ItemRow({ item, actionCell }: Readonly<ItemRowProps>) {
  const { name, period, note, amount } = item;
  return (
    <TableRow>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>{period}</TableCell>
      <TableCell>{note}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{actionCell}</TableCell>
    </TableRow>
  );
}
