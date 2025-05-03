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
    <div className="group relative flex h-80 w-80 flex-col items-center justify-center gap-10">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 transition-all duration-300 hover:scale-105 group-hover:opacity-100">
        <h2 className="text-center text-2xl font-semibold text-white">
          <Link href={hrefSite} target="_blank">
            {title}
          </Link>
        </h2>
        <p className="text-center text-xs text-white">{description}</p>
        <div className="flex gap-2">
          <Button className="mt-4 h-min rounded-md bg-[#ECBB67] px-2 py-1 text-xs text-black transition duration-300 ease-in-out hover:bg-[#F0BF6C]">
            <Link href={hrefSite} target="_blank" className="flex gap-2">
              View Site <ArrowRight />
            </Link>
          </Button>
          <Button className="mt-4 h-min rounded-md bg-[#ECBB67] px-2 py-1 text-xs text-black transition duration-300 ease-in-out hover:bg-[#F0BF6C]">
            <Link href={hrefGithub} target="_blank" className="flex gap-2">
              View Github <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
