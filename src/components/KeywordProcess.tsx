import { useRef, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { keywordProcess } from "../data/expertise";
import { SectionHeader } from "./ui/SectionHeader";
import { IntentChip } from "./ui/IntentChip";

export function KeywordProcess() {
  const [active, setActive] = useState(0);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = keywordProcess[active];
  const last = keywordProcess.length - 1;

  function go(i: number, focus = false) {
    const next = Math.max(0, Math.min(last, i));
    setActive(next);
    if (focus) nodeRefs.current[next]?.focus();
  }

  function onKey(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    if (e.key === "ArrowRight") go(i + 1, true);
    else if (e.key === "ArrowLeft") go(i - 1, true);
    else if (e.key === "Home") go(0, true);
    else if (e.key === "End") go(last, true);
    else return;
    e.preventDefault();
  }

  return (
    <section id="keyword-research" aria-labelledby="keyword-research-title" className="section border-t border-rule">
      <div className="page">
        <SectionHeader
          id="keyword-research"
          title="Research first, budget second"
          lede="Before a campaign goes live, I work out who is searching, what they mean, and which searches are worth paying for. This is the process, step by step."
        />

        <div className="mt-16 rounded-[32px] border border-rule bg-surface p-5 sm:p-10">
          {/* Connected nodes */}
          <div className="relative lg:pb-14">
            <div className="absolute left-5 right-5 top-[19px] h-0.5 rounded-full bg-rule" aria-hidden="true" />
            <div
              className="absolute left-5 top-[19px] h-0.5 rounded-full bg-brass transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ width: `calc((100% - 2.5rem) * ${active / last})` }}
              aria-hidden="true"
            />
            <ol className="relative flex justify-between" aria-label="Keyword research steps">
              {keywordProcess.map((s, i) => {
                const current = i === active;
                const done = i < active;
                return (
                  <li key={s.title} className="relative flex flex-col items-center">
                    <button
                      ref={(el) => {
                        nodeRefs.current[i] = el;
                      }}
                      type="button"
                      onClick={() => go(i)}
                      onKeyDown={(e) => onKey(e, i)}
                      aria-current={current ? "step" : undefined}
                      aria-label={`Step ${i + 1}: ${s.title}`}
                      className={`nums grid h-10 w-10 place-items-center rounded-full border-2 text-sm font-bold transition-all duration-300 ${
                        current
                          ? "scale-110 border-brass bg-brass text-canvas"
                          : done
                            ? "border-brass bg-surface text-brass"
                            : "border-rule bg-surface text-haze hover:border-haze"
                      }`}
                    >
                      {i + 1}
                    </button>
                    <span
                      className={`absolute top-12 hidden w-24 text-center text-xs leading-snug lg:block ${
                        current ? "text-chalk" : "text-dim"
                      }`}
                      aria-hidden="true"
                    >
                      {s.title}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Step detail */}
          <div key={active} className="mt-10 grid animate-rise gap-10 border-t border-rule pt-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="nums text-sm font-semibold text-brass">
                Step {active + 1} of {keywordProcess.length}
              </p>
              <h3 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-chalk md:text-4xl">{step.title}</h3>
              <p className="mt-4 max-w-measure text-lg leading-relaxed text-chalk/85">{step.summary}</p>
              <ul className="mt-6 space-y-3">
                {step.actions.map((a) => (
                  <li key={a} className="flex gap-3 leading-relaxed text-haze">
                    <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-rule bg-canvas/60 p-5">
                <h4 className="text-sm font-semibold text-chalk">What this step produces</h4>
                <p className="mt-2 leading-relaxed text-haze">{step.output}</p>
              </div>
              {step.examples && (
                <div className="rounded-2xl border border-rule bg-canvas/60 p-5">
                  <h4 className="text-sm font-semibold text-chalk">Example terms</h4>
                  <ul className="mt-4 space-y-2">
                    {step.examples.map((ex) => (
                      <li key={ex.term} className="flex items-center justify-between gap-3 rounded-xl bg-well px-3 py-2.5 text-sm">
                        <span className="text-chalk/90">{ex.term}</span>
                        <IntentChip intent={ex.intent} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between gap-4">
            <button type="button" onClick={() => go(active - 1)} disabled={active === 0} className="btn-ghost !px-4 disabled:cursor-not-allowed disabled:opacity-40">
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              Previous step
            </button>
            <button type="button" onClick={() => go(active + 1)} disabled={active === last} className="btn-ghost !px-4 disabled:cursor-not-allowed disabled:opacity-40">
              Next step
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
