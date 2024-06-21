"use client";

import { useState } from "react";
import StudentSearch from "@/components/admin/students/StudentSearch";
import SearchBar from "@/components/admin/SearchBar";

export default function SearchStudents() {
  const [search, setSearch] = useState("");

  return (
    <div className={"flex flex-grow flex-col gap-8"}>
      <h1 className={"text-center text-5xl"}>Beheer gebruikers</h1>
      <SearchBar search={search} onChange={setSearch} />
      <div className="flex-grow">
        <StudentSearch search={search} />
      </div>
    </div>
  );
}
