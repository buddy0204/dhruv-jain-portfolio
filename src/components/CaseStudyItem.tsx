import { ChevronDown } from "lucide-react";
import type { CaseStudy } from "../data/caseStudies";
import { TrendGlyph } from "./TrendGlyph";

interface Props {
  study: CaseStudy;
  isOpen: boolean;
  onToggle: () => void;
}

export function CaseStudyItem({ study, isOpen, onToggle }: Props) {
  const panelId = `case-study-panel-${study.id}`;

  return (
    <article className="grid gap-6 border-t border-ink-border py-12 md:grid-cols-[80px_1fr] md:gap-14 md:py-16">
      <div className="font-display text-6xl leading-none text-ink-border md:text-7xl">{study.index}</div>

      <div>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="group flex w-full items-start justify-between gap-6 text-left"
        >
          <h3 className="max-w-2xl font-display text-2xl leading-tight text-paper transition-colors group-hover:text-gold md:text-3xl">
            {study.title}
          </h3>
          <ChevronDown
            className={`mt-2 h-5 w-5 shrink-0 text-paper-muted transition-transform duration-300 group-hover:text-gold ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-y border-ink-border py-5 font-mono text-xs sm:grid-cols-4">
          <div>
            <dt className="text-paper-faint">Product</dt>
            <dd className="mt-1 text-paper/90">{study.meta.product}</dd>
          </div>
          <div>
            <dt className="text-paper-faint">Channel</dt>
            <dd className="mt-1 text-paper/90">{study.meta.channel}</dd>
          </div>
          <div>
            <dt className="text-paper-faint">Objective</dt>
            <dd className="mt-1 text-paper/90">{study.meta.objective}</dd>
          </div>
          <div>
            <dt className="text-paper-faint">Role</dt>
            <dd className="mt-1 text-paper/90">{study.meta.role}</dd>
          </div>
        </dl>

        <div
          id={panelId}
          className="grid transition-[grid-template-rows] duration-300 ease-in-out"
          style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="grid gap-8 pb-2 pt-8 lg:grid-cols-[1.3fr_1fr]">
              <div className="max-w-prose space-y-6 text-[15px] leading-relaxed text-paper/85">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wide text-paper-faint">Challenge</h4>
                  <p className="mt-2">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wide text-paper-faint">What I did</h4>
                  <ul className="mt-2 space-y-2">
                    {study.actions.map((a) => (
                      <li key={a} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wide text-paper-faint">Result</h4>
                  <p className="mt-2">{study.result}</p>
                </div>
                <div className="border-l-2 border-gold/60 pl-4 text-paper/70">
                  <h4 className="font-mono text-xs uppercase tracking-wide text-gold/80">Takeaway</h4>
                  <p className="mt-2 italic">{study.takeaway}</p>
                </div>
              </div>

              <div className="flex flex-col gap-5 self-start rounded-sm bg-ink-900 p-6">
                {study.kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="flex items-start gap-3 border-b border-ink-border pb-5 last:border-0 last:pb-0"
                  >
                    <TrendGlyph direction={kpi.direction} className="mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-paper">{kpi.label}</p>
                      <p className="mt-1 text-xs leading-snug text-paper-muted">{kpi.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
