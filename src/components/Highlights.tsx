import { brands } from "../data/brands";
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
          title="Spend that comes back several times over"
          lede="Return on ad spend I've maintained for the D2C brands I manage. Each block is one rupee: one in, and what comes back as tracked conversion value."
        />

        <div ref={ref} className="mt-14 grid gap-5 lg:grid-cols-2">
          {brands.map((b) => (
            <ReturnBlocks key={b.id} name={b.name} category={b.category} roas={b.roas} start={inView} />
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="rounded-[24px] border border-rule p-6 sm:p-8">
            <h3 className="text-lg font-semibold tracking-tight text-chalk">Google Ads campaign management</h3>
            <p className="mt-2 leading-relaxed text-haze">
              Performance Max, Search, Shopping and Demand Gen, run end to end: research, structure, tracking,
              optimisation and scaling.
            </p>
          </div>
          <div className="rounded-[24px] border border-rule p-6 sm:p-8">
            <h3 className="text-lg font-semibold tracking-tight text-chalk">D2C brand growth</h3>
            <p className="mt-2 leading-relaxed text-haze">
              Hands-on with direct-to-consumer brands in fashion and toys, where every campaign answers to
              profitable revenue.
            </p>
          </div>
        </div>

        <p className="mt-6 text-sm text-dim">
          Figures are ROAS levels maintained on the accounts, not a live feed. Revenue and spend aren't published here.
        </p>
      </div>
    </section>
  );
}
