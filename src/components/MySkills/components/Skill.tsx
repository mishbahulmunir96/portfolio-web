import Image from "next/image";
import { FC } from "react";

interface SkillProps {
  src: string;
  alt: string;
  children: string;
}

const Skill: FC<SkillProps> = ({ src, alt, children }) => {
  return (
    <div className="flex h-64 w-60 flex-col items-center justify-center gap-10 rounded-xl bg-[#3d3e42] transition duration-300 ease-in-out hover:bg-[#F0BF6C]">
      <Image src={src} alt={alt} width={100} height={100} />
      <p className="text-lg font-medium text-slate-50">{children}</p>
    </div>
  );
};

export default Skill;
