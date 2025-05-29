import React from "react";
import LinkMenu from "./LinkMenu";
import SearchBar from "./SearchBar";

const DekstopMenu = () => {
  return (
    <div className="hidden w-full items-center justify-between md:flex">
      <nav className="flex flex-1 justify-center">
        <ul className="flex items-center gap-8 font-medium text-slate-300 lg:gap-12">
          <LinkMenu href="#about">About</LinkMenu>
          <LinkMenu href="#portfolio">Portfolio</LinkMenu>
          <LinkMenu href="#contact">Contact</LinkMenu>
        </ul>
      </nav>
      <div className="ml-8 flex-shrink-0">
        <SearchBar className="w-64" />
      </div>
    </div>
  );
};

export default DekstopMenu;
