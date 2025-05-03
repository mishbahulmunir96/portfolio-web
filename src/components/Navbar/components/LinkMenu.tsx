import Link from "next/link";
import React, { FC } from "react";

interface LinkMenuProps {
  children: string;
}

const LinkMenu: FC<LinkMenuProps> = ({ children }) => {
  return (
    <li className="transition duration-300 ease-in-out hover:font-semibold hover:text-slate-200">
      <Link href="/">{children}</Link>
    </li>
  );
};

export default LinkMenu;
