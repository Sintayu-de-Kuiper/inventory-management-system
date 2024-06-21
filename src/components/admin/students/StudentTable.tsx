import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReactNode } from "react";

interface Student {
  id: string;
  name: string;
  studentNumber: string;
  cohort: string;
}

interface StudentTableProps {
  students: Student[];
  actionHeader: ReactNode;
  actionCell: ReactNode;
  className?: string;
}

export default function StudentTable({
  students,
  actionHeader,
  actionCell,
  className,
}: Readonly<StudentTableProps>) {
  return (
    <Table className={`m-auto w-full  max-w-4xl ${className}`}>
      <TableHeader>
        <TableRow>
          <TableHead>Naam</TableHead>
          <TableHead>Student nummer</TableHead>
          <TableHead>Cohort</TableHead>
          <TableHead className={"w-8"}>{actionHeader}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell className="font-medium">{student.name}</TableCell>
            <TableCell>{student.studentNumber}</TableCell>
            <TableCell>{student.cohort}</TableCell>
            <TableCell>{actionCell}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
