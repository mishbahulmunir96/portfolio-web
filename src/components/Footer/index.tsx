import React from "react";
import Container from "../Container";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Container id="footer" innerClassName="relative py-8 px-4">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="flex items-center justify-center gap-6 text-2xl text-slate-100 sm:text-3xl">
          <Link
            href="https://www.linkedin.com/in/mishbahul-munir/"
            target="_blank"
            className="transition-colors duration-300 hover:text-[#ECBB67]"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://www.instagram.com/misbachul.munirch/"
            target="_blank"
            className="transition-colors duration-300 hover:text-[#ECBB67]"
            aria-label="Instagram Profile"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://github.com/mishbahulmunir96"
            target="_blank"
            className="transition-colors duration-300 hover:text-[#ECBB67]"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </Link>
        </div>

        <p className="text-center text-xl font-medium text-[#ECBB67] sm:text-2xl md:text-3xl">
          "Thanks for scrolling"
        </p>

        <p className="mt-4 text-center text-sm text-slate-400">
          © 2025 Mishbahul Munir. All rights reserved.
        </p>
      </div>
    </Container>
  );
};

export default Footer;
