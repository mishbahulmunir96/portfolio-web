"use client";

import LinkMenu from "./LinkMenu";
import SearchBar from "./SearchBar";

interface MobileMenuProps {
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  return (
    <>
      <div
        className="absolute left-0 top-0 z-40 h-screen w-screen bg-black/80 backdrop-blur-sm md:hidden"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      <div className="bg-[#34353A]/98 fixed inset-0 z-50 w-80 max-w-[90vw] border-l border-slate-700/50 backdrop-blur-xl duration-300 animate-in slide-in-from-right md:top-20 md:hidden">
        <div className="flex h-full flex-col p-6">
          <div className="mb-8">
            <SearchBar className="w-full" />
          </div>

          <nav className="flex-1">
            <ul className="flex flex-col gap-6 text-lg font-medium">
              <div onClick={closeMenu}>
                <LinkMenu href="#about">About</LinkMenu>
              </div>
              <div onClick={closeMenu}>
                <LinkMenu href="#portfolio">Portfolio</LinkMenu>
              </div>
              <div onClick={closeMenu}>
                <LinkMenu href="#contact">Contact</LinkMenu>
              </div>
            </ul>
          </nav>

          <div className="border-t border-slate-700/50 pt-6">
            <p className="text-center text-sm text-slate-400">
              © 2025 Mishbahul Munir
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
