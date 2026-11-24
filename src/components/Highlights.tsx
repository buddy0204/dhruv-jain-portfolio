import { brands } from "../data/brands";
import { inhouseProfile } from "../data/inhouse";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import { SectionHeader } from "./ui/SectionHeader";

function ReturnBlocks({ name, category, roas, start }: { name: string; category: string; roas: number; start: boolean }) {
  const count = useCountUp(roas, start, 1200 + roas * 60);
  return (
    <div className="rounded-[24px] border border-rule bg-surface p-6 sm:p-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-chalk">{name}</h3>
          <p className="mt-1 text-sm text-haze">{category}</p>
        </div>
        <p className="nums text-right text-5xl font-extrabold leading-none tracking-[-0.04em] text-brass sm:text-6xl">
          {Math.round(count)}x+
          <span className="mt-2 block text-sm font-medium tracking-normal text-haze">ROAS maintained</span>
        </p>
      </div>

      <div className="mt-8 space-y-4" aria-hidden="true">
        <div>
          <p className="text-xs text-haze">Ad spend</p>
          <div className="mt-2 flex gap-1.5">
            <span className="h-7 w-[calc((100%-10*0.375rem)/11)] rounded-md bg-chalk/80" />
          </div>
        </div>
        <div>
          <p className="text-xs text-haze">Conversion value returned</p>
          <div className="mt-2 flex gap-1.5">
            {Array.from({ length: roas }).map((_, i) => (
              <span
                key={i}
                className="h-7 w-[calc((100%-10*0.375rem)/11)] rounded-md bg-brass transition-all duration-500 ease-out"
                style={{
                  opacity: start ? 1 : 0,
                  transform: start ? "none" : "scaleY(0.3)",
                  transitionDelay: `${200 + i * 90}ms`,
                }}
              />
            ))}
            <span
              className="h-7 w-[calc((100%-10*0.375rem)/11)] rounded-md border border-dashed border-brass/60 transition-opacity duration-500"
              style={{ opacity: start ? 1 : 0, transitionDelay: `${200 + roas * 90}ms` }}
            />
          </div>
        </div>
      </div>
      <p className="sr-only">
        For every rupee of ad spend, more than {roas} rupees in tracked conversion value.
      </p>
    </div>
  );
}

export function Highlights() {
  const { ref, inView } = useInView<HTMLDivElement>("0px 0px -20% 0px");

  return (
    <section id="results" aria-labelledby="results-title" className="section border-t border-rule">
      <div className="page">
        <SectionHeader
          id="results"
          title="Results across e-commerce and apps"
          lede="For D2C brands, return on ad spend I've maintained. Each block is one rupee: one in, and what comes back as tracked conversion value. For apps, the scale I manage every month."
        />

        <div ref={ref} className="mt-14 grid gap-5 lg:grid-cols-2">
          {brands.map((b) => (
            <ReturnBlocks key={b.id} name={b.name} category={b.category} roas={b.roas} start={inView} />
          ))}
        </div>

        <div className="mt-5 rounded-[24px] border border-rule bg-surface p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <h3 className="text-xl font-semibold tracking-tight text-chalk">App install campaigns</h3>
            <a href="#app-campaigns" className="text-sm font-medium text-brass transition-colors hover:text-chalk">
              See the app case studies
            </a>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-4">
            {inhouseProfile.scale.map((s) => (
              <div key={s.label} className="border-t border-rule pt-4">
                <dd className="nums text-4xl font-extrabold tracking-tight text-chalk">{s.value}</dd>
                <dt className="mt-1 text-sm leading-snug text-haze">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-6 text-sm text-dim">
          ROAS figures are levels maintained on the accounts, not a live feed. Client revenue and spend aren't published here.
        </p>
      </div>
    </section>
  );
}
