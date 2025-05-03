import React from "react";
import Container from "../Container";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Container innerClassName="relative">
      <div className="">
        <div className="absolute -top-28 left-[475px] flex items-center justify-center gap-4 text-3xl text-slate-100">
          <Link
            href="https://www.linkedin.com/in/mishbahul-munir/"
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://www.instagram.com/misbachul.munirch/"
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link href="https://github.com/mishbahulmunir96" target="_blank">
            <FaGithub />
          </Link>
        </div>
        <p className="text-center text-3xl font-medium text-[#ECBB67]">
          "Thanks for scrolling"
        </p>
      </div>
    </Container>
  );
};

export default Footer;
