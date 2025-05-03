import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-1/3">
      <Input
        placeholder="Search..."
        className="border-slate-600 bg-slate-600 placeholder:text-slate-400"
      />
      <Search className="absolute right-2 top-2 cursor-pointer text-slate-400 transition duration-300 ease-in-out hover:text-slate-200" />
    </div>
  );
};

export default SearchBar;
