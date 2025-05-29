"use client";

import Link from "next/link";
import React, { FC } from "react";

interface LinkMenuProps {
  children: string;
  href: string;
}

const LinkMenu: FC<LinkMenuProps> = ({ children, href }) => {
  const handleClick = () => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <li className="group">
      <Link
        href={href}
        onClick={handleClick}
        className="relative px-1 py-2 transition-all duration-300 ease-in-out hover:text-[#ECBB67] focus:text-[#ECBB67] focus:outline-none"
      >
        {children}
        <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#ECBB67] transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  );
};

export default LinkMenu;
