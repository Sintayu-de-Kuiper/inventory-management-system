import TrashIcon from "@/components/TrashIcon";
import StudentTable from "@/components/admin/students/StudentTable";

interface LendItemsFormProps {
  search: string;
}

export default function StudentSearch({
  search,
}: Readonly<LendItemsFormProps>) {
  const students = [
    {
      id: "1",
      name: "Rutger Pronk",
      studentNumber: "1201903",
      cohort: "2020 - 2021",
    },
  ];

  const filteredStudents = students.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <StudentTable
      students={filteredStudents}
      actionHeader={""}
      actionCell={
        <button className={"text-destructive hover:text-destructive/90 "}>
          <TrashIcon />
        </button>
      }
    />
  );
}
