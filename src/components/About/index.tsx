import React from "react";
import Container from "../Container";

const About = () => {
  return (
    <Container id="about">
      <h1 className="mb-6 text-5xl font-semibold text-slate-50">About</h1>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="mb-4 h-0.5 w-48 bg-[#ECBB67] md:mb-0 md:mt-2"></div>
        <p className="text-justify text-xl text-slate-200">
          Hi! I'm a web developer passionate about building responsive and
          efficient web applications using modern technologies like{" "}
          <span className="text-[#ECBB67]">
            HTML, CSS, TailwindCSS, JavaScript, TypeScript, ReactJS, NextJS,
            NodeJS, and ExpressJS
          </span>
          . I enjoy working with databases using{" "}
          <span className="text-[#ECBB67]">PostgreSQL and Prisma ORM</span> to
          keep data operations smooth and reliable.
          <br /> <br /> I've worked on various projects—from e-commerce
          platforms to custom dashboards—where I’ve honed my problem-solving
          skills and attention to detail. I'm always{" "}
          <span className="text-[#ECBB67]">
            excited to learn, collaborate, and grow alongside
          </span>{" "}
          creative development teams in the ever-evolving tech world.
        </p>
      </div>
    </Container>
  );
};

export default About;
