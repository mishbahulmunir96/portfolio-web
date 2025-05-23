import Logo from "./components/Logo";
import MenuBar from "./components/MenuBar";
import SearchBar from "./components/SearchBar";

const Navbar = () => {
  return (
    <header className="fixed z-50 flex h-24 w-full items-center justify-center bg-[#34353A]/70 backdrop-blur">
      <nav className="mx-10 w-full md:mx-24">
        <div className="flex items-center justify-between">
          <Logo />
          <SearchBar className="block w-3/5 md:hidden" />
          <MenuBar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
