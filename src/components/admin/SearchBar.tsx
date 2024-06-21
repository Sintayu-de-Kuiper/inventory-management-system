import React from "react";

interface SearchBarProps {
  search: string;
  onChange: (currentSearch: string) => void;
}

export default function SearchBar({
  search,
  onChange,
}: Readonly<SearchBarProps>) {
  return (
    <input
      className="bg-transparent w-full  rounded-full px-5 py-2 shadow-md outline-none"
      placeholder="Search..."
      value={search}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
