"use client";

import Link from "next/link";
import React from "react";

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex-shrink-0">
      <Link
        href="#"
        onClick={scrollToTop}
        className="group inline-block transition-all duration-300 ease-in-out hover:scale-105 focus:scale-105 focus:outline-none"
      >
        <h1 className="font-mono text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-[#ECBB67] group-focus:text-[#ECBB67] md:text-3xl">
          &lt;/&gt;
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
