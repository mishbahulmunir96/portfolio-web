import Container from "../Container";
import { CarouselPortfolio } from "./components/CarouselPortfolio";

const Portfolio = () => {
  return (
    <Container id="portfolio">
      <h1 className="mb-6 text-center text-5xl font-semibold text-slate-50">
        My Portfolio
      </h1>
      <CarouselPortfolio className="" />
      <div className="mt-8 flex items-center justify-center">
        {/* <Button className="bg-[#ECBB67] text-black hover:bg-[#F0BF6C] hover:font-semibold">
          See More <ArrowRight />
        </Button> */}
      </div>
    </Container>
  );
};

export default Portfolio;
