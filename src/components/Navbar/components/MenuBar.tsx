"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import DekstopMenu from "./DekstopMenu";
import MobileMenu from "./MobileMenu";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="text-slate-400 md:w-[65%]">
      <button
        className="-m-2 flex justify-end p-2 transition-colors duration-200 hover:text-white focus:text-white focus:outline-none md:hidden"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="z-50 h-6 w-6 text-white" />
        ) : (
          <Menu className="h-6 w-6 text-white" />
        )}
      </button>

      <DekstopMenu />

      {isOpen && <MobileMenu closeMenu={closeMenu} />}
    </div>
  );
};

export default MenuBar;
