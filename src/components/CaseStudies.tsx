import { caseStudies } from "../data/caseStudies";
import { CaseStudyItem } from "./CaseStudyItem";

export function CaseStudies() {
  return (
    <section id="work" className="px-6 py-4 md:pl-28 md:pr-16">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="pt-24 font-display text-3xl text-paper md:text-4xl">Selected case studies</h2>
        <p className="mt-4 max-w-prose text-paper-muted">
          Three campaigns that show how I diagnose, test, and scale — across optimization, acquisition growth, and a
          new-market experiment.
        </p>

        <div>
          {caseStudies.map((study) => (
            <CaseStudyItem key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
