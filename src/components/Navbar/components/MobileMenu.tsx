import React from "react";
import LinkMenu from "./LinkMenu";
import SearchBar from "./SearchBar";

const MobileMenu = () => {
  return (
    <div className="absolute -right-10 top-14 flex h-screen w-screen justify-between bg-[#34353A]/70 px-10 backdrop-blur md:hidden">
      <ul className="flex w-full flex-col gap-2 text-lg font-medium">
        <LinkMenu href="#about">About</LinkMenu>
        <LinkMenu href="#portfolio">Portfolio</LinkMenu>
        <LinkMenu href="#contact">Contact</LinkMenu>
      </ul>
    </div>
  );
};

export default MobileMenu;
