import { useRef, useState, type KeyboardEvent } from "react";
import { campaignTypes, capabilities, funnelStages } from "../data/expertise";
import { SectionHeader } from "./ui/SectionHeader";

// Funnel diagram: three stages, with the selected campaign's coverage highlighted.
function Funnel({ from, to }: { from: number; to: number }) {
  return (
    <div aria-hidden="true" className="space-y-2">
      {funnelStages.map((stage, i) => {
        const on = i >= from && i <= to;
        const inset = i * 9; // narrowing funnel
        return (
          <div key={stage} className="relative h-11" style={{ marginInline: `${inset}%` }}>
            <div
              className={`flex h-full items-center justify-center rounded-xl text-sm font-medium transition-all duration-500 ${
                on ? "bg-brass/90 text-canvas" : "bg-well text-dim"
              }`}
            >
              {stage}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function CampaignExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = campaignTypes[activeIndex];

  function onKey(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    let next = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % campaignTypes.length;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + campaignTypes.length) % campaignTypes.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = campaignTypes.length - 1;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section id="expertise" aria-labelledby="expertise-title" className="section border-t border-rule">
      <div className="page">
        <SectionHeader
          id="expertise"
          title="Google Ads, campaign by campaign"
          lede="Each campaign type plays a different role in a D2C account. Select one to see what it does, how I run it, and where it fits."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[320px_1fr]">
          <div role="tablist" aria-orientation="vertical" aria-label="Campaign types" className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
            {campaignTypes.map((c, i) => {
              const selected = i === activeIndex;
              return (
                <button
                  key={c.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`campaign-tab-${c.id}`}
                  aria-selected={selected}
                  aria-controls="campaign-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveIndex(i)}
                  onKeyDown={(e) => onKey(e, i)}
                  className={`group shrink-0 rounded-2xl border px-5 py-4 text-left transition-colors lg:w-full ${
                    selected ? "border-brass/60 bg-surface" : "border-rule hover:border-haze/50"
                  }`}
                >
                  <span className={`block font-semibold ${selected ? "text-chalk" : "text-chalk/80"}`}>{c.name}</span>
                  <span className="mt-1 hidden text-sm text-haze lg:block">{c.short}</span>
                </button>
              );
            })}
          </div>

          <div
            id="campaign-panel"
            role="tabpanel"
            aria-labelledby={`campaign-tab-${active.id}`}
            className="rounded-[28px] border border-rule bg-surface p-6 sm:p-10"
          >
            <div key={active.id} className="grid animate-rise gap-10 xl:grid-cols-[1fr_260px]">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-chalk">{active.name}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-chalk/90">{active.what}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brass">How I approach it</h4>
                  <p className="mt-2 leading-relaxed text-haze">{active.approach}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brass">Optimisation techniques</h4>
                  <ul className="mt-3 grid gap-y-2.5">
                    {active.techniques.map((t) => (
                      <li key={t} className="flex gap-3 text-[15px] leading-snug text-haze">
                        <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-dim" aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <aside className="self-start rounded-2xl border border-rule bg-canvas/60 p-5">
                <h4 className="text-sm font-semibold text-chalk">Where it fits in D2C growth</h4>
                <div className="mt-5">
                  <Funnel from={active.stages[0]} to={active.stages[1]} />
                </div>
                <p className="mt-5 text-sm leading-relaxed text-haze">{active.fit}</p>
              </aside>
            </div>
          </div>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-8 border-t border-rule pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <li key={c.title}>
              <h3 className="font-semibold text-chalk">{c.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-haze">{c.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
