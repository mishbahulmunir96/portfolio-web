import Logo from "./components/Logo";
import MenuBar from "./components/MenuBar";

const Navbar = () => {
  return (
    <header className="fixed z-50 flex h-24 w-full items-center justify-center bg-[#34353A]">
      <nav className="mx-24 w-full">
        <div className="flex items-center justify-between">
          <Logo />
          <MenuBar />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
