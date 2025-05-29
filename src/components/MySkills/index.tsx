import Container from "../Container";
import Skill from "./components/Skill";

const MySkills = () => {
  return (
    <Container id="skills">
      <h1 className="mb-6 text-center text-5xl font-semibold text-slate-50">
        My Skills
      </h1>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-6">
        <Skill src="/images/html.png" alt="Html" children="HTML" />
        <Skill src="/images/css.png" alt="CSS" children="CSS" />
        <Skill
          src="/images/javascript.png"
          alt="Javascript"
          children="Javascript"
        />
        <Skill
          src="/images/typescript.png"
          alt="Typescript"
          children="Typescript"
        />
        <Skill src="/images/react_js.png" alt="ReactJS" children="ReactJS" />
        <Skill src="/images/Nextjs.png" alt="NextJS" children="NextJS" />
        <Skill
          src="/images/Tailwind_CSS.png"
          alt="TailwindCSS"
          children="TailwindCSS"
        />
        <Skill src="/images/git.png" alt="Git" children="Git Source Control" />
        <Skill src="/images/nodejs.png" alt="NodeJS" children="NodeJS" />
        <Skill
          src="/images/postgresql.png"
          alt="PostgreSQL"
          children="PostgreSQL"
        />
        <Skill src="/images/mysql.png" alt="MySQL" children="MySQL" />
        <Skill
          src="/images/prisma_orm.png"
          alt="Prisma ORM"
          children="Prisma ORM"
        />
      </div>
    </Container>
  );
};

export default MySkills;
