import { Fragment } from "react";
import { profile } from "../data/profile";
import { QueryStream } from "./QueryStream";

const words = profile.headline.split(" ");

// Proof row: D2C results first, then app-campaign scale.
const proof = [
  { label: "Louis Stitch", value: "5x+ ROAS", accent: true },
  { label: "Jaiman Toys", value: "10x+ ROAS", accent: true },
  { label: "App portfolio", value: "30 apps", accent: false },
  { label: "Monthly app spend", value: "₹50L+", accent: false },
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="hero-glow relative overflow-hidden">
      <div className="page grid min-h-[100svh] items-center gap-14 pb-16 pt-28 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:pt-24">
        <div>
          <p className="animate-rise text-[15px] font-medium text-haze">{profile.role}</p>

          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.75rem,6.2vw,4.75rem)] font-extrabold leading-[0.95] tracking-[-0.045em] text-chalk"
          >
            {words.map((w, i) => (
              <Fragment key={i}>
                <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                  <span className="inline-block animate-rise" style={{ animationDelay: `${120 + i * 70}ms` }}>
                    {w}
                  </span>
                </span>
                {i < words.length - 1 && " "}
              </Fragment>
            ))}
          </h1>

          <p className="mt-7 max-w-[54ch] animate-rise text-lg leading-relaxed text-haze [animation-delay:600ms]">
            {profile.intro}
          </p>

          <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:720ms]">
            <a href="#results" className="btn-primary">
              Explore my work
            </a>
            <a href="#contact" className="btn-ghost">
              Let's work together
            </a>
          </div>

          <dl className="mt-10 grid animate-rise grid-cols-2 gap-x-8 gap-y-6 border-t border-rule pt-6 [animation-delay:840ms] sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-2 xl:grid-cols-4">
            {proof.map((p) => (
              <div key={p.label}>
                <dt className="whitespace-nowrap text-sm text-haze">{p.label}</dt>
                <dd className={`nums mt-1 whitespace-nowrap text-2xl font-bold tracking-tight ${p.accent ? "text-brass" : "text-chalk"}`}>
                  {p.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-rise [animation-delay:400ms]">
          <QueryStream />
        </div>
      </div>
    </section>
  );
}
