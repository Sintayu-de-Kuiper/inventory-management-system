"use client";

import { useState } from "react";
import Button from "../Button";
import SearchBar from "./SearchBar";
import ZoekenTable from "@/components/students/Zoeken";

export default function SearchStudents() {
  const [search, setSearch] = useState("");

  return (
    <>
      <h1 className={"text-center text-5xl"}>Scan items</h1>
      <SearchBar search={search} onChange={setSearch} />
      <div className="flex-grow">
        <ZoekenTable search={search} />
      </div>
      <Button className={"mx-auto w-fit"}>Inleveren</Button>
    </>
  );
}
