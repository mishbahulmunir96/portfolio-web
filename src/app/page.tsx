import About from "@/components/About";
import ContactMe from "@/components/Contact-me";
import Jumbotron from "@/components/Jumbotron";
import MySkills from "@/components/MySkills";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <About />
      <MySkills />
      <Portfolio />
      <ContactMe />
    </main>
  );
}
