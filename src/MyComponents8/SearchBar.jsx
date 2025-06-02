import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log("Searching for:", query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center w-full  bg-[#0B1120] text-white rounded-md  px-3 py-2 border border-borderColor "
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for an esports competition or team"
        className="flex-grow bg-transparent outline-none placeholder-gray-400 text-xs"
      />
      <button type="submit">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 hover:text-white" />
      </button>
    </form>
  );
}
