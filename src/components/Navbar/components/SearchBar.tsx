import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FC } from "react";

interface SeafchBarProps {
  className?: string;
}

const SearchBar: FC<SeafchBarProps> = ({ className }) => {
  return (
    <div className={`relative w-1/3 ${className}`}>
      <Input
        placeholder="Search..."
        className="border-slate-600 bg-slate-600 placeholder:text-slate-400"
      />
      <Search className="absolute right-2 top-2 cursor-pointer transition duration-300 ease-in-out hover:text-slate-200" />
    </div>
  );
};

export default SearchBar;
