import LinkMenu from "./LinkMenu";
import SearchBar from "./SearchBar";

const MenuBar = () => {
  return (
    <div className="flex w-[65%] items-center justify-between">
      <ul className="justiy-between flex gap-10 font-medium text-slate-400">
        <LinkMenu>About</LinkMenu>
        <LinkMenu>Portfolio</LinkMenu>
        <LinkMenu>Contact</LinkMenu>
      </ul>
      <SearchBar />
    </div>
  );
};

export default MenuBar;
