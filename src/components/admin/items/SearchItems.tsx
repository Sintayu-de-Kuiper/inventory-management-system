"use client";

import { useState } from "react";
import Button from "@/components/Button";
import SearchBar from "@/components/admin/SearchBar";
import ItemSearch from "@/components/admin/items/ItemSearch";

export default function SearchItems() {
  const [search, setSearch] = useState("");

  return (
    <div className={"flex flex-grow flex-col gap-8"}>
      <h1 className={"text-center text-5xl"}>Beheer items</h1>
      <SearchBar search={search} onChange={setSearch} />
      <div className="flex-grow">
        <ItemSearch search={search} />
      </div>
      <Button className={"mx-auto w-fit"}>Inleveren</Button>
    </div>
  );
}
