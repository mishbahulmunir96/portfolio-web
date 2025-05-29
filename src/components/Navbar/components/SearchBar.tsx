"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FC, useState } from "react";

interface SearchBarProps {
  className?: string;
}

const SearchBar: FC<SearchBarProps> = ({ className }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // search logic
      console.log("Searching for:", searchValue);
    }
  };

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <div className="relative">
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search..."
          className={`border-slate-600 bg-slate-700/50 pr-10 text-white transition-all duration-300 ease-in-out placeholder:text-slate-400 focus:border-[#ECBB67]/50 focus:bg-slate-600/70 focus:ring-1 focus:ring-[#ECBB67]/30 ${isFocused ? "shadow-lg shadow-[#ECBB67]/10" : ""} `}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 transition-colors duration-300 ease-in-out hover:text-[#ECBB67] focus:text-[#ECBB67] focus:outline-none"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
