import React from "react";
import LinkMenu from "./LinkMenu";
import SearchBar from "./SearchBar";

const DekstopMenu = () => {
  return (
    <div className="hidden items-center justify-between md:flex">
      <ul className="flex justify-between gap-10 font-medium">
        <LinkMenu href="#about">About</LinkMenu>
        <LinkMenu href="#portfolio">Portfolio</LinkMenu>
        <LinkMenu href="#contact">Contact</LinkMenu>
      </ul>
      <SearchBar />
    </div>
  );
};

export default DekstopMenu;
