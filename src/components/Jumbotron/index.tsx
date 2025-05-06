import { FaGithub, FaInstagram } from "react-icons/fa";
import { Button } from "../ui/button";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";
import Container from "../Container";

const Jumbotron = () => {
  return (
    <Container
      id="home"
      sectionClassName="bg-[#34353A] h-screen pt-24 drop-shadow-2xl"
      innerClassName="relative"
    >
      <div className="text-slate-200">
        <h1 className="text-xl font-medium">Hello,</h1>
        <h1 className="space-y-2 text-3xl">
          I'M{" "}
          <span className="text-6xl font-medium text-[#ECBB67]">
            Mishbahul Munir
          </span>
        </h1>
        <p className="text-2xl font-medium">Fullstack Web Developer</p>
      </div>
      <Button className="mt-6 border-2 border-[#ECBB67] bg-transparent text-xl text-[#ECBB67]">
        Contact Me
      </Button>
      <div className="absolute -bottom-36 right-0 flex justify-end text-2xl text-slate-300">
        <div className="flex flex-col items-center gap-4">
          <div className="h-24 w-0.5 bg-[#ECBB67]"></div>

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
      </div>
    </Container>
  );
};

export default Jumbotron;
