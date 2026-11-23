import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { brands, type Brand } from "../data/brands";
import { SectionHeader } from "./ui/SectionHeader";
import { BrandMark } from "./ui/BrandMark";

const chapterTitles = [
  "Brand overview",
  "Marketing objective",
  "Challenges",
  "Strategy",
  "Execution",
  "Performance",
  "Learnings",
] as const;

function ChapterBody({ brand, chapter }: { brand: Brand; chapter: number }) {
  const c = brand.caseStudy.chapters;
  const list = (items: string[]) => (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-lg leading-relaxed text-chalk/90">
          <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
  const para = (text: string) => <p className="text-xl leading-relaxed text-chalk/90 md:text-2xl md:leading-snug">{text}</p>;

  switch (chapter) {
    case 0:
      return para(c.overview);
    case 1:
      return para(c.objective);
    case 2:
      return list(c.challenges);
    case 3:
      return list(c.strategy);
    case 4:
      return list(c.execution);
    case 5:
      return (
        <div>
          <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
            <p className="nums text-[clamp(4rem,12vw,8rem)] font-extrabold leading-[0.85] tracking-[-0.05em] text-brass">
              {brand.roas}x+
            </p>
            <p className="max-w-[24ch] pb-2 text-haze">Return on ad spend, maintained</p>
          </div>
          <p className="mt-8 max-w-measure text-lg leading-relaxed text-chalk/90">{c.performance}</p>
          {brand.caseStudy.extraMetrics.length > 0 && (
            <dl className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3">
              {brand.caseStudy.extraMetrics.map((m) => (
                <div key={m.label} className="border-t border-rule pt-4">
                  <dt className="text-sm text-haze">{m.label}</dt>
                  <dd className="nums mt-1 text-2xl font-bold text-chalk">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      );
    default:
      return list(c.learnings);
  }
}

export function CaseStudies({ activeId, onChange }: { activeId: string; onChange: (id: string) => void }) {
  const brand = brands.find((b) => b.id === activeId) ?? brands[0];
  const [chapter, setChapter] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => setChapter(0), [activeId]);

  // Arrow-key navigation between brand tabs (WAI-ARIA tabs pattern).
  function onTabKey(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + brands.length) % brands.length;
    onChange(brands[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <section id="case-studies" aria-labelledby="case-studies-title" className="section border-t border-rule">
      <div className="page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            id="case-studies"
            title="Case studies"
            lede="How each account is run, from objective to learnings, in seven chapters."
          />
          <div role="tablist" aria-label="Choose a case study" className="flex gap-2 rounded-full border border-rule p-1.5">
            {brands.map((b, i) => {
              const selected = b.id === brand.id;
              return (
                <button
                  key={b.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`case-tab-${b.id}`}
                  aria-selected={selected}
                  aria-controls="case-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => onChange(b.id)}
                  onKeyDown={(e) => onTabKey(e, i)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    selected ? "bg-chalk text-canvas" : "text-haze hover:text-chalk"
                  }`}
                >
                  {b.name}
                </button>
              );
            })}
          </div>
        </div>

        <article
          id="case-panel"
          role="tabpanel"
          aria-labelledby={`case-tab-${brand.id}`}
          className="mt-12 overflow-hidden rounded-[32px] border border-rule bg-surface"
        >
          <header className="flex flex-col gap-6 border-b border-rule p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex items-center gap-5">
              <BrandMark brand={brand} size="lg" />
              <div>
                <p className="text-sm text-haze">{brand.name}, {brand.category.toLowerCase()}</p>
                <h3 className="mt-1 max-w-[26ch] text-2xl font-bold leading-tight tracking-tight text-chalk md:text-3xl">
                  {brand.caseStudy.title}
                </h3>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2 text-sm" aria-label="Campaign types">
              {brand.campaigns.map((c) => (
                <li key={c} className="rounded-full border border-rule px-3 py-1 text-haze">
                  {c}
                </li>
              ))}
            </ul>
          </header>

          <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)]">
            <nav aria-label="Case study chapters" className="border-b border-rule lg:border-b-0 lg:border-r">
              <ol className="flex overflow-x-auto p-3 lg:flex-col lg:p-4">
                {chapterTitles.map((t, i) => {
                  const current = i === chapter;
                  return (
                    <li key={t} className="shrink-0">
                      <button
                        type="button"
                        onClick={() => setChapter(i)}
                        aria-current={current ? "step" : undefined}
                        className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition-colors ${
                          current ? "bg-canvas text-chalk" : "text-haze hover:text-chalk"
                        }`}
                      >
                        <span
                          className={`nums grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs font-semibold ${
                            current ? "bg-brass text-canvas" : i < chapter ? "bg-rule text-chalk" : "border border-rule"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <span className="whitespace-nowrap">{t}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>

            <div className="flex min-h-[420px] flex-col p-6 sm:p-10">
              <p className="nums text-sm font-semibold text-brass">
                Chapter {chapter + 1} of {chapterTitles.length}
              </p>
              <h4 className="mt-1 text-2xl font-bold tracking-tight text-chalk" aria-live="polite">
                {chapterTitles[chapter]}
              </h4>
              <div key={`${brand.id}-${chapter}`} className="mt-6 max-w-[60ch] animate-rise">
                <ChapterBody brand={brand} chapter={chapter} />
              </div>

              <div className="mt-auto flex items-center justify-between gap-4 pt-10">
                <button
                  type="button"
                  onClick={() => setChapter((c) => Math.max(0, c - 1))}
                  disabled={chapter === 0}
                  className="btn-ghost !px-4 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  Previous
                </button>
                <div className="hidden h-1 flex-1 overflow-hidden rounded-full bg-rule sm:block" aria-hidden="true">
                  <div
                    className="h-full rounded-full bg-brass transition-[width] duration-500"
                    style={{ width: `${((chapter + 1) / chapterTitles.length) * 100}%` }}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setChapter((c) => Math.min(chapterTitles.length - 1, c + 1))}
                  disabled={chapter === chapterTitles.length - 1}
                  className="btn-ghost !px-4 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
