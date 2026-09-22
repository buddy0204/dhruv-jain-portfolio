import { NavRail } from "./components/NavRail";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CaseStudies } from "./components/CaseStudies";
import { Approach } from "./components/Approach";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="relative">
      <NavRail />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Approach />
        <Contact />
      </main>
    </div>
  );
}
