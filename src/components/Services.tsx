import { services } from "../data/services";
import { SectionHeader } from "./ui/SectionHeader";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section border-t border-rule">
      <div className="page">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            id="services"
            title="What I can take on for you"
            lede="Hands-on paid acquisition for e-commerce brands and mobile apps. I plan, build, run and report the campaigns myself."
          />
          <a href="#contact" className="btn-ghost shrink-0 self-start lg:self-auto">
            Discuss a project
          </a>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto_1fr_auto]">
          {services.map((s) => (
            <article key={s.id} className="flex flex-col rounded-[28px] border border-rule bg-surface p-6 sm:p-8 lg:row-span-5 lg:grid lg:grid-rows-subgrid lg:gap-0">
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-chalk">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-haze">{s.forWho}</p>
              <p className="mt-6 leading-relaxed text-chalk/90">{s.summary}</p>

              <div>
                <h4 className="mt-8 text-sm font-semibold text-chalk">What's included</h4>
                <ul className="mt-3 space-y-2.5">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-snug text-haze">
                      <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-8">
                <a
                  href={s.proofHref}
                  className="block border-t border-rule pt-5 text-sm font-medium text-brass transition-colors hover:text-chalk"
                >
                  {s.proof}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
