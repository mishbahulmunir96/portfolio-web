import Image from "next/image";
import { FC } from "react";

interface SkillProps {
  src: string;
  alt: string;
  children: string;
}

const Skill: FC<SkillProps> = ({ src, alt, children }) => {
  return (
    <div className="flex h-44 w-40 flex-col items-center justify-center gap-4 rounded-xl bg-[#3d3e42] transition duration-300 ease-in-out hover:bg-[#F0BF6C] md:h-64 md:w-60 md:gap-10">
      <Image src={src} alt={alt} width={100} height={100} />
      <p className="text-center text-lg font-medium text-slate-50">
        {children}
      </p>
    </div>
  );
};

export default Skill;
