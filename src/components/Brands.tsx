import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { brands, type Brand } from "../data/brands";
import { SectionHeader } from "./ui/SectionHeader";
import { BrandMark } from "./ui/BrandMark";

function BrandProfile({ brand, onOpenCase }: { brand: Brand; onOpenCase: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  const panelId = `brand-details-${brand.id}`;

  return (
    <article className="flex flex-col rounded-[28px] border border-rule bg-surface">
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <BrandMark brand={brand} size="lg" />
          <div className="min-w-0">
            <h3 className="text-2xl font-bold tracking-tight text-chalk">{brand.name}</h3>
            <p className="mt-1 text-haze">{brand.category}</p>
          </div>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-rule pt-6 text-sm">
          <div>
            <dt className="text-dim">My role</dt>
            <dd className="mt-1 text-chalk">{brand.role}</dd>
          </div>
          <div>
            <dt className="text-dim">ROAS maintained</dt>
            <dd className="nums mt-1 text-2xl font-bold tracking-tight text-brass">{brand.roas}x+</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-dim">Business</dt>
            <dd className="mt-1 text-chalk">{brand.model}</dd>
          </div>
          <div className="col-span-2">
            <dt className="text-dim">Campaigns managed</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {brand.campaigns.map((c) => (
                <span key={c} className="rounded-full border border-rule px-3 py-1 text-chalk">
                  {c}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-auto border-t border-rule">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium text-chalk transition-colors hover:text-brass sm:px-8"
        >
          {open ? "Hide role and approach" : "Show role and approach"}
          <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>

        <div
          id={panelId}
          className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
          {...({ inert: open ? undefined : "" } as Record<string, unknown>)}
        >
          <div className="overflow-hidden">
            <div className="space-y-7 px-6 pb-8 sm:px-8">
              <DetailList title="Responsibilities" items={brand.responsibilities} />
              <DetailList title="Strategy and optimisation approach" items={brand.approach} />
              <DetailList title="Key learnings" items={brand.learnings} accent />
              <button
                type="button"
                onClick={() => onOpenCase(brand.id)}
                className="btn-ghost w-full sm:w-auto"
              >
                Read the {brand.name} case study
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function DetailList({ title, items, accent = false }: { title: string; items: string[]; accent?: boolean }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-chalk">{title}</h4>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed text-haze">
            <span className={`mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full ${accent ? "bg-brass" : "bg-dim"}`} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Brands({ onOpenCase }: { onOpenCase: (id: string) => void }) {
  return (
    <section id="brands" aria-labelledby="brands-title" className="section border-t border-rule">
      <div className="page">
        <SectionHeader
          id="brands"
          title="D2C brands I work with"
          lede="Freelance Google Ads management for direct-to-consumer brands, with full ownership of the account and its results."
        />
        <div className="mt-14 grid items-start gap-5 lg:grid-cols-2">
          {brands.map((b) => (
            <BrandProfile key={b.id} brand={b} onOpenCase={onOpenCase} />
          ))}
        </div>
      </div>
    </section>
  );
}
