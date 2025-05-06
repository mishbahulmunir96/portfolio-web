import Link from "next/link";
import React, { FC } from "react";

interface LinkMenuProps {
  children: string;
  href: string;
}

const LinkMenu: FC<LinkMenuProps> = ({ children, href }) => {
  return (
    <li className="transition duration-300 ease-in-out hover:font-semibold hover:text-slate-200">
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default LinkMenu;
