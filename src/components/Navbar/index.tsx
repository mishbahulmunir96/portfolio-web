import Logo from "./components/Logo";
import MenuBar from "./components/MenuBar";
import SearchBar from "./components/SearchBar";

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-16 w-full items-center justify-center border-b border-slate-700/50 bg-[#34353A]/90 backdrop-blur-md md:h-20">
      <nav className="mx-4 w-full max-w-7xl sm:mx-8 md:mx-24">
        <div className="flex items-center justify-between">
          <Logo />
          <SearchBar className="hidden w-2/5 sm:block md:hidden" />
          <MenuBar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
