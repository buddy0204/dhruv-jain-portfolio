import { profile, expertise } from "../data/profile";
import { portfolioImpact } from "../data/caseStudies";
import { TrendGlyph } from "./TrendGlyph";

export function About() {
  return (
    <section id="about" className="border-t border-ink-border px-6 py-28 md:pl-28 md:pr-16">
      <div className="mx-auto grid w-full max-w-5xl gap-16 md:grid-cols-[1fr_auto_1fr]">
        <div className="max-w-prose">
          <h2 className="font-display text-3xl text-paper md:text-4xl">About</h2>
          <p className="mt-6 text-base leading-relaxed text-paper/85 md:text-lg">{profile.about}</p>

          <h3 className="mt-12 font-mono text-xs uppercase tracking-wide text-paper-faint">Expertise</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
            {expertise.map((item) => (
              <li key={item} className="border-b border-ink-border pb-2 text-sm text-paper/90">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden w-px bg-ink-border md:block" aria-hidden="true" />

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wide text-paper-faint">Portfolio-wide impact</h3>
          <div className="mt-6 flex flex-col gap-6">
            {portfolioImpact.map((kpi) => (
              <div key={kpi.label} className="flex items-start gap-4 border-b border-ink-border pb-6">
                <TrendGlyph direction={kpi.direction} className="mt-1" />
                <div>
                  <p className="text-sm font-medium text-paper">{kpi.label}</p>
                  <p className="mt-1 text-sm leading-snug text-paper-muted">{kpi.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
