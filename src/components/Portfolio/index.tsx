import React from "react";
import MyPortfolio from "./components/MyPortfolio";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Container from "../Container";

const Portfolio = () => {
  return (
    <Container id="portfolio">
      <h1 className="mb-6 text-center text-5xl font-semibold text-slate-50">
        My Portfolio
      </h1>
      <div className="grid grid-cols-3 gap-6">
        <MyPortfolio
          src="/images/ratehaven.png"
          alt="Ratehaven"
          title="Ratehaven"
          description="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam itaque facere assumenda natus, soluta quos."
          hrefSite="https://ratehaven.my.id"
          hrefGithub="https://github.com/mishbahulmunir96/FP-0510-02-fe"
        />
        <MyPortfolio
          src="/images/maket.png"
          alt="Makelar Tiket"
          title="Makelar Tiket"
          description="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam itaque facere assumenda natus, soluta quos."
          hrefSite="https://makelar-ticket.vercel.app/"
          hrefGithub="https://github.com/mishbahulmunir96/MP-0510-04-FE"
        />
        <MyPortfolio
          src="/images/bloghub.png"
          alt="BlogHub"
          title="BlogHub"
          description="
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam itaque facere assumenda natus, soluta quos."
          hrefSite="https://blog-app-jcwd0510-fe-u6gn.vercel.app/"
          hrefGithub="https://github.com/mishbahulmunir96/blog-app-jcwd0510-fe"
        />
      </div>
      <div className="mt-8 flex items-center justify-center">
        {/* <Button className="bg-[#ECBB67] text-black hover:bg-[#F0BF6C] hover:font-semibold">
          See More <ArrowRight />
        </Button> */}
      </div>
    </Container>
  );
};

export default Portfolio;
