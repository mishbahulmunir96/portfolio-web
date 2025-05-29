import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface MyPortfolioProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  hrefSite: string;
  hrefGithub: string;
}

const MyPortfolio: FC<MyPortfolioProps> = ({
  src,
  alt,
  title,
  description,
  hrefSite,
  hrefGithub,
}) => {
  return (
    <div className="group relative mx-auto flex aspect-square w-full max-w-sm transform-gpu cursor-pointer flex-col items-center justify-center gap-10 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out will-change-transform hover:scale-105">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 transition-all duration-300 hover:scale-105 group-hover:opacity-100">
        <h2 className="mb-2 text-center text-xl font-semibold text-white md:text-2xl">
          <Link href={hrefSite} target="_blank">
            {title}
          </Link>
        </h2>
        <p className="mb-4 px-4 text-center text-xs text-white md:text-sm">
          {description}
        </p>
        <div className="flex gap-2">
          <Button
            asChild
            className="h-min rounded-md bg-[#ECBB67] px-3 py-2 text-xs text-black transition duration-300 ease-in-out hover:bg-[#F0BF6C]"
          >
            <Link
              href={hrefSite}
              target="_blank"
              className="flex items-center gap-2"
            >
              View Site <ArrowRight size={14} />
            </Link>
          </Button>
          <Button
            asChild
            className="h-min rounded-md bg-[#ECBB67] px-3 py-2 text-xs text-black transition duration-300 ease-in-out hover:bg-[#F0BF6C]"
          >
            <Link
              href={hrefGithub}
              target="_blank"
              className="flex items-center gap-2"
            >
              View Github <ArrowRight size={14} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
