import { profile } from "../data/profile";
import { SectionHeader } from "./ui/SectionHeader";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section border-t border-rule">
      <div className="page grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <SectionHeader id="about" title="One person, from research to results" />
          <div className="mt-8 max-w-measure space-y-5 text-lg leading-relaxed text-chalk/85">
            {profile.about.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>

        <div className="space-y-12 lg:pt-3">
          <div>
            <h3 className="font-semibold text-chalk">Experience and education</h3>
            <ul className="mt-4">
              {profile.experience.map((e) => (
                <li key={e.role} className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[1fr_auto] sm:gap-6">
                  <div>
                    <p className="text-chalk">{e.role}</p>
                    <p className="text-sm text-haze">{e.org}</p>
                  </div>
                  <p className="nums text-sm text-dim sm:text-right">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-chalk">Toolkit</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {profile.toolkit.map((t) => (
                <li key={t} className="rounded-full border border-rule px-3.5 py-1.5 text-sm text-haze">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
