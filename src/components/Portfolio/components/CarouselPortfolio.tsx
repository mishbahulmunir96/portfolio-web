import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import MyPortfolio from "./MyPortfolio";

interface CarouselPortfolioProps {
  className?: string;
}

export function CarouselPortfolio({ className }: CarouselPortfolioProps) {
  return (
    <div className={`mx-auto max-w-7xl px-4 ${className}`}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="relative w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          <CarouselItem className="pl-2 md:basis-1/3 md:pl-4">
            <MyPortfolio
              src="/images/ratehaven.png"
              alt="Ratehaven"
              title="Ratehaven"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam itaque facere assumenda natus, soluta quos."
              hrefSite="https://ratehaven.my.id"
              hrefGithub="https://github.com/mishbahulmunir96/FP-0510-02-fe"
            />
          </CarouselItem>
          <CarouselItem className="pl-2 md:basis-1/3 md:pl-4">
            <MyPortfolio
              src="/images/maket.png"
              alt="Makelar Tiket"
              title="Makelar Tiket"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam itaque facere assumenda natus, soluta quos."
              hrefSite="https://makelar-ticket.vercel.app/"
              hrefGithub="https://github.com/mishbahulmunir96/MP-0510-04-FE"
            />
          </CarouselItem>
          <CarouselItem className="pl-2 md:basis-1/3 md:pl-4">
            <MyPortfolio
              src="/images/bloghub.png"
              alt="BlogHub"
              title="BlogHub"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam itaque facere assumenda natus, soluta quos."
              hrefSite="https://blog-app-jcwd0510-fe-u6gn.vercel.app/"
              hrefGithub="https://github.com/mishbahulmunir96/blog-app-jcwd0510-fe"
            />
          </CarouselItem>
          <CarouselItem className="pl-2 md:basis-1/3 md:pl-4">
            <MyPortfolio
              src="/images/bloghub.png"
              alt="BlogHub"
              title="BlogHub"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam itaque facere assumenda natus, soluta quos."
              hrefSite="https://blog-app-jcwd0510-fe-u6gn.vercel.app/"
              hrefGithub="https://github.com/mishbahulmunir96/blog-app-jcwd0510-fe"
            />
          </CarouselItem>
          <CarouselItem className="pl-2 md:basis-1/3 md:pl-4">
            <MyPortfolio
              src="/images/bloghub.png"
              alt="BlogHub"
              title="BlogHub"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam itaque facere assumenda natus, soluta quos."
              hrefSite="https://blog-app-jcwd0510-fe-u6gn.vercel.app/"
              hrefGithub="https://github.com/mishbahulmunir96/blog-app-jcwd0510-fe"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}
