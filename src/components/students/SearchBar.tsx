import React from "react";

interface SearchBarProps {
  search: string;
  onChange: (currentSearch: string) => void;
}

const SearchBar = ({ search, onChange }: Readonly<SearchBarProps>) => {
  return (
    <div className={"flex w-full gap-5"}>
      <input
        className="bg-transparent   h-1/5 w-3/5 flex-grow justify-self-center rounded-full p-2 px-2 shadow-md outline-none"
        placeholder="Search..."
        value={search}
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchBar;
