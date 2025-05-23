"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import DekstopMenu from "./DekstopMenu";
import MobileMenu from "./MobileMenu";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative text-slate-400 md:w-[65%]">
      <div className="flex justify-end md:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <X className="text-xl text-white" />
        ) : (
          <Menu className="text-xl text-white" />
        )}
      </div>

      <DekstopMenu />
      {isOpen && <MobileMenu />}
    </div>
  );
};

export default MenuBar;
