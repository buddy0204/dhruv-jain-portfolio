import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { inhouseCaseStudies, inhouseProfile, portfolioImpact, type CaseStudy } from "../data/inhouse";
import { SectionHeader } from "./ui/SectionHeader";
import { TrendGlyph } from "./ui/TrendGlyph";

function InHouseStudy({ study, open, onToggle }: { study: CaseStudy; open: boolean; onToggle: () => void }) {
  const panelId = `inhouse-panel-${study.id}`;
  const meta = [
    { label: "Product", value: study.meta.product },
    { label: "Channel", value: study.meta.channel },
    { label: "Objective", value: study.meta.objective },
    { label: "Role", value: study.meta.role },
  ];

  return (
    <article className="border-t border-rule">
      <h4>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full items-start justify-between gap-6 py-8 text-left"
        >
          <span>
            <span className="block text-sm text-haze">{study.meta.objective}</span>
            <span className="mt-2 block max-w-[34ch] text-2xl font-bold leading-tight tracking-tight text-chalk transition-colors group-hover:text-brass md:text-3xl">
              {study.title}
            </span>
          </span>
          <ChevronDown
            className={`mt-8 h-6 w-6 shrink-0 text-haze transition-transform duration-300 group-hover:text-brass ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </h4>

      <div
        id={panelId}
        className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        {...({ inert: open ? undefined : "" } as Record<string, unknown>)}
      >
        <div className="overflow-hidden">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-2xl border border-rule p-5 text-sm sm:grid-cols-4">
            {meta.map((m) => (
              <div key={m.label}>
                <dt className="text-dim">{m.label}</dt>
                <dd className="mt-1 text-chalk/90">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="grid gap-10 pb-12 pt-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="max-w-measure space-y-8 leading-relaxed">
              <div>
                <h5 className="font-semibold text-brass">Challenge</h5>
                <p className="mt-2 text-chalk/85">{study.challenge}</p>
              </div>
              <div>
                <h5 className="font-semibold text-brass">What I did</h5>
                <ul className="mt-3 space-y-2.5">
                  {study.actions.map((a) => (
                    <li key={a} className="flex gap-3 text-chalk/85">
                      <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-brass">Result</h5>
                <p className="mt-2 text-chalk/85">{study.result}</p>
              </div>
              <blockquote className="border-l-2 border-brass/60 pl-5">
                <p className="text-sm font-semibold text-chalk">Takeaway</p>
                <p className="mt-2 text-lg text-haze">{study.takeaway}</p>
              </blockquote>
            </div>

            <ul className="self-start rounded-2xl border border-rule bg-canvas/60 p-6" aria-label="Outcomes">
              {study.kpis.map((kpi) => (
                <li key={kpi.label} className="flex items-start gap-4 border-b border-rule py-5 first:pt-0 last:border-0 last:pb-0">
                  <TrendGlyph direction={kpi.direction} className="mt-0.5" />
                  <div>
                    <p className="font-medium text-chalk">{kpi.label}</p>
                    <p className="mt-1 text-sm leading-snug text-haze">{kpi.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export function AppCampaigns() {
  const [openId, setOpenId] = useState<string | null>(inhouseCaseStudies[0]?.id ?? null);

  return (
    <section id="app-campaigns" aria-labelledby="app-campaigns-title" className="section border-t border-rule">
      <div className="page">
        <SectionHeader id="app-campaigns" title="App install campaigns at portfolio scale" lede={inhouseProfile.positioning} />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-[28px] border border-rule bg-surface p-6 sm:p-8">
            <p className="text-sm text-haze">
              {inhouseProfile.role}, {inhouseProfile.company}, {inhouseProfile.period}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-chalk/90">{inhouseProfile.about}</p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="App campaign expertise">
              {inhouseProfile.expertise.map((e) => (
                <li key={e} className="rounded-full border border-rule px-3 py-1 text-sm text-haze">
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <ul className="self-start overflow-hidden rounded-[28px] border border-rule" aria-label="Channels">
            {inhouseProfile.channels.map((c) => (
              <li key={c.name} className="border-b border-rule p-6 last:border-0">
                <p className="font-semibold text-chalk">{c.name}</p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-haze">{c.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold tracking-tight text-chalk">Portfolio-wide impact</h3>
          <ul className="mt-6 grid gap-5 md:grid-cols-3">
            {portfolioImpact.map((kpi) => (
              <li key={kpi.label} className="rounded-2xl border border-rule p-6">
                <TrendGlyph direction={kpi.direction} />
                <p className="mt-4 font-semibold text-chalk">{kpi.label}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-haze">{kpi.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <h3 className="text-xl font-semibold tracking-tight text-chalk">App campaign case studies</h3>
          <p className="mt-2 max-w-measure text-haze">
            How I diagnose, test and scale, across optimisation, acquisition growth and a new-market experiment.
          </p>
          <div className="mt-8 border-b border-rule">
            {inhouseCaseStudies.map((s) => (
              <InHouseStudy
                key={s.id}
                study={s}
                open={openId === s.id}
                onToggle={() => setOpenId(openId === s.id ? null : s.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
