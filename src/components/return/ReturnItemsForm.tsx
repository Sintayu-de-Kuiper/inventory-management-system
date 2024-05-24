import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ReturnItemsForm() {
  return (
    <Table className={"m-auto w-full  max-w-4xl"}>
      <TableHeader>
        <TableRow>
          <TableHead>Naam</TableHead>
          <TableHead>Uitleen Periode</TableHead>
          <TableHead>Notitie</TableHead>
          <TableHead className={"w-8"}>Aantal</TableHead>
          <TableHead className={"w-8"}>Select</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Arduino Uno</TableCell>
          <TableCell>17/05/2024 - 24/05/2024</TableCell>
          <TableCell>Inclusief 10 breadboard kabeltjes</TableCell>
          <TableCell className={"text-center"}>7</TableCell>
          <TableCell className={"text-center"}>
            <input type="checkbox" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
