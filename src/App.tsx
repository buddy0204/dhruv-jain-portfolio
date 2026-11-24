import { useCallback, useState } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { Brands } from "./components/Brands";
import { CaseStudies } from "./components/CaseStudies";
import { AppCampaigns } from "./components/AppCampaigns";
import { Services } from "./components/Services";
import { CampaignExplorer } from "./components/CampaignExplorer";
import { KeywordProcess } from "./components/KeywordProcess";
import { WorkingProcess } from "./components/WorkingProcess";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { brands } from "./data/brands";

export default function App() {
  const [caseId, setCaseId] = useState(brands[0].id);

  // Brand profiles link into the matching case study.
  const openCase = useCallback((id: string) => {
    setCaseId(id);
    document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brass focus:px-4 focus:py-2 focus:font-semibold focus:text-canvas"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <Highlights />
        <Brands onOpenCase={openCase} />
        <CaseStudies activeId={caseId} onChange={setCaseId} />
        <AppCampaigns />
        <CampaignExplorer />
        <KeywordProcess />
        <WorkingProcess />
        <About />
        <Contact />
      </main>
    </>
  );
}
